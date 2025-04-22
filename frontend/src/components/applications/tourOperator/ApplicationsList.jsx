import React, { useEffect, useState } from 'react';
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Spinner,
    Button,
    Text,
    TableContainer,
    Flex,
    Icon,
    useBreakpointValue,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('Authentication token is missing. Please log in.');
                    return;
                }

                const res = await axios.get('http://127.0.0.1:8000/api/tour-operator/list', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setApplications(res.data);
            } catch (err) {
                console.error("Error fetching applications:", err);
                setError('Failed to load applications. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    const handleEditClick = (id) => {
        navigate(`/dashboard/tour-operator/edit/${id}`);
    };

    if (loading) {
        return (
            <Box textAlign="center" p={8}>
                <Spinner size="xl" color="teal.500" />
                <Text mt={4} fontSize="lg">Loading your applications...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box textAlign="center" p={8}>
                <Text fontSize="lg" color="red.500">{error}</Text>
            </Box>
        );
    }

    return (
        <Box p={{ base: 4, md: 8 }} maxW="100%" mx="auto">
            <Flex justify="space-between" align="center" mb={6}>
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">Your Applications</Text>
            </Flex>

            <TableContainer borderRadius="lg" overflowX="auto" boxShadow="md" bg="white">
                <Table variant="striped" colorScheme="gray" size="md">
                    <Thead bg="gray.100">
                        <Tr>
                            <Th>Applicant Name</Th>
                            <Th>Status</Th>
                            <Th>Created At</Th>
                            <Th textAlign="center">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {applications.length > 0 ? (
                            applications.map((application) => (
                                <Tr key={application.id}>
                                    <Td>{application.applicant_name_en}</Td>
                                    <Td>{application.status}</Td>
                                    <Td>{new Date(application.created_at).toLocaleDateString()}</Td>
                                    <Td textAlign="center">
                                        <Button
                                            leftIcon={<EditIcon />}
                                            colorScheme="teal"
                                            size="sm"
                                            onClick={() => handleEditClick(application.id)}
                                        >
                                            Edit
                                        </Button>
                                    </Td>
                                </Tr>
                            ))
                        ) : (
                            <Tr>
                                <Td colSpan="4" textAlign="center">
                                    <Text>No applications found.</Text>
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ApplicationList;

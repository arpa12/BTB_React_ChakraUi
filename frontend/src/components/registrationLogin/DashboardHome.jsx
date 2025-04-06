import React, { useEffect, useState } from 'react';
import {
    Box, Heading, Text, Alert, AlertIcon, Spinner,
    SimpleGrid, Card, CardBody, VStack, Icon,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaClipboardList, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    alertStyles,
    cardStyles,
} from '../../assets/styles/registrationLogin/dashboardStyles';

const DashboardHome = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [logoutError, setLogoutError] = useState('');
    const navigate = useNavigate();

    const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/dashboard', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data.user);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                if (err.response?.status === 401) {
                    setError('Session expired. Please log in again.');
                    localStorage.removeItem('token');
                    navigate('/login');
                } else {
                    setError('Failed to fetch user data.');
                }
            }
        };

        fetchUserData();
    }, [navigate]);

    if (loading) {
        return (
            <Box textAlign="center" mt={["50px", "100px"]}>
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
            </Box>
        );
    }

    return (
        <Box p={{ base: 4, md: 6 }}>
            {/* Error Alerts */}
            {error && (
                <Alert status="error" sx={alertStyles} mb={4}>
                    <AlertIcon />
                    {error}
                </Alert>
            )}
            {logoutError && (
                <Alert status="error" sx={alertStyles} mb={4}>
                    <AlertIcon />
                    {logoutError}
                </Alert>
            )}

            {/* Dashboard Cards */}
            <SimpleGrid columns={gridColumns} spacing={{ base: 4, md: 8 }}>
                <Card sx={{ ...cardStyles.base, ...cardStyles.hover }}>
                    <CardBody>
                        <VStack spacing={3}>
                            <Icon as={FaClipboardList} boxSize={{ base: 8, md: 10 }} color="purple.600" />
                            <Heading size={{ base: 'sm', md: 'md' }} color="purple.600">Draft Application</Heading>
                            <Text fontSize={{ base: 'xl', md: '2xl' }} color="purple.600">2</Text>
                        </VStack>
                    </CardBody>
                </Card>
                <Card sx={{ ...cardStyles.base, ...cardStyles.hover }}>
                    <CardBody>
                        <VStack spacing={3}>
                            <Icon as={FaCheckCircle} boxSize={{ base: 8, md: 10 }} color="purple.600" />
                            <Heading size={{ base: 'sm', md: 'md' }} color="purple.600">Saved Application</Heading>
                            <Text fontSize={{ base: 'xl', md: '2xl' }} color="purple.600">6</Text>
                        </VStack>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
    );
};

export default DashboardHome;

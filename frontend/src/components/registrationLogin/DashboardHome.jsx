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
    const [draftCount, setDraftCount] = useState(0);
    const [submittedCount, setSubmittedCount] = useState(0);


    const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

    useEffect(() => {
        const fetchDashboardData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                // Step 1: Get user info
                const userRes = await axios.get('http://127.0.0.1:8000/api/dashboard', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(userRes.data.user);

                // Step 2: Get all tour operator applications
                const appsRes = await axios.get('http://127.0.0.1:8000/api/tour-operator/list', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const applications = appsRes.data;

                // Step 3: Filter locally
                const draftCount = applications.filter(app => app.status === 'draft').length;
                const submittedCount = applications.filter(app => app.status === 'submitted').length;

                setDraftCount(draftCount);
                setSubmittedCount(submittedCount);
            } catch (err) {
                setError('Failed to fetch data.');
                if (err.response?.status === 401) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
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
                            <Text fontSize={{ base: 'xl', md: '2xl' }} color="purple.600">{draftCount}</Text>

                        </VStack>
                    </CardBody>
                </Card>
                <Card sx={{ ...cardStyles.base, ...cardStyles.hover }}>
                    <CardBody>
                        <VStack spacing={3}>
                            <Icon as={FaCheckCircle} boxSize={{ base: 8, md: 10 }} color="purple.600" />
                            <Heading size={{ base: 'sm', md: 'md' }} color="purple.600">Saved Application</Heading>
                            <Text fontSize={{ base: 'xl', md: '2xl' }} color="purple.600">{submittedCount}</Text>
                        </VStack>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
    );
};

export default DashboardHome;

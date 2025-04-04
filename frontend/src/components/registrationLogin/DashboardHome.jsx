import React, { useEffect, useState } from 'react';
import {
    Box, Heading, Text, Alert, AlertIcon, Spinner,
    SimpleGrid, Card, CardBody, VStack, Icon
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
            <Box textAlign="center" mt="100px">
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
            </Box>
        );
    }

    return (
        <Box p="6">
            {/* Error Alerts */}
            {error && (
                <Alert status="error" sx={alertStyles}>
                    <AlertIcon />
                    {error}
                </Alert>
            )}
            {logoutError && (
                <Alert status="error" sx={alertStyles}>
                    <AlertIcon />
                    {logoutError}
                </Alert>
            )}

            {/* Dashboard Cards */}
            <SimpleGrid columns={[1, 2, 3]} spacing="8">
                <Card sx={{ ...cardStyles.base, ...cardStyles.hover }}>
                    <CardBody>
                        <VStack>
                            <Icon as={FaClipboardList} boxSize={10} color="purple.600" />
                            <Heading size="md" color="purple.600">Draft Application</Heading>
                            <Text fontSize="2xl" color="purple.600">2</Text>
                        </VStack>
                    </CardBody>
                </Card>
                <Card sx={{ ...cardStyles.base, ...cardStyles.hover }}>
                    <CardBody>
                        <VStack>
                            <Icon as={FaCheckCircle} boxSize={10} color="purple.600" />
                            <Heading size="md" color="purple.600">Saved Application</Heading>
                            <Text fontSize="2xl" color="purple.600">6</Text>
                        </VStack>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
    );
};

export default DashboardHome;

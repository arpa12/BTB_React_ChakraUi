import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, Alert, AlertIcon, Spinner, SimpleGrid, Card, CardBody, VStack, Icon, Avatar, Menu, MenuButton, MenuList, MenuItem, HStack, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { FaClipboardList, FaCheckCircle, FaUser, FaBars } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
    sidebarStyles,
    mobileSidebarStyles,
    mobileButtonStyles,
    headerStyles,
    alertStyles,
    cardStyles,
} from '../../assets/styles/registrationLogin/dashboardStyles';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [logoutError, setLogoutError] = useState('');
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const sidebarWidth = useBreakpointValue({ base: 'full', md: '250px' });

    // Fetch user data
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
                handleApiError(err);
            }
        };

        fetchUserData();
    }, [navigate]);

    // Handle API errors
    const handleApiError = (err) => {
        console.error('Error:', err.response);
        if (err.response?.status === 401) {
            setError('Your session has expired. Please log in again.');
            localStorage.removeItem('token');
            navigate('/login');
        } else {
            setError('Failed to fetch user data. Please try again later.');
        }
    };

    // Handle user logout
    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/logout', {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.message === 'User Logged Out Successfully') {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                setLogoutError('Failed to log out. Please try again.');
            }
        } catch (err) {
            console.error('Logout Error:', err.response);
            setLogoutError('Logout failed. Please try again.');
        }
    };

    // Handle dashboard navigation click
    const handleDashboardClick = () => {
        if (location.pathname !== '/dashboard') {
            navigate('/dashboard');
        }
    };

    // Loading state UI
    if (loading) {
        return (
            <Box textAlign="center" mt="100px">
                <Spinner  thickness='4px'
                          speed='0.65s'
                          emptyColor='gray.200'
                          color='blue.500'
                          size='xl' />
            </Box>
        );
    }

    return (
        <Box display="flex" minHeight="100vh" backgroundColor="purple.700">
            {/* Sidebar for Desktop */}
            <Box sx={sidebarStyles.base} width={sidebarWidth} sx={sidebarStyles.desktop}>
                <VStack spacing="4" align="stretch" mt="20px">
                    <Button onClick={handleDashboardClick} backgroundColor="transparent" color="white" _hover={{ bg: 'purple.600' }}>
                        Dashboard
                    </Button>
                </VStack>
                <VStack spacing="4" align="stretch">
                    <Button onClick={() => navigate('/registerForm')} backgroundColor="transparent" color="white" _hover={{ bg: 'purple.600' }}>
                        Applications
                    </Button>
                </VStack>
            </Box>

            {/* Hamburger Menu for Mobile */}
            <Box sx={mobileSidebarStyles}>
                <Button onClick={onOpen} sx={mobileButtonStyles}>
                    <Icon as={FaBars} boxSize={8} />
                </Button>
                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <VStack>
                                <Button onClick={() => navigate('/registerForm')} backgroundColor="transparent" color="purple.700" _hover={{ bg: 'purple.100' }}>
                                    Applications
                                </Button>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>

            {/* Main Content */}
            <Box flex="1" p="8" bg="gray.50">
                {/* Header */}
                <Box sx={headerStyles}>
                    <HStack ml="auto">
                        {/* Profile Icon with Username */}
                        <Menu>
                            <MenuButton as={Button} rightIcon={<FaUser />} variant="link" color="purple.700">
                                {user?.name}
                            </MenuButton>
                            <MenuList>
                                <Box p="4" display="flex" alignItems="center">
                                    <Avatar name={user?.name} size="lg" mr="4" />
                                    <Box>
                                        <Text fontWeight="bold">{user?.name}</Text>
                                    </Box>
                                </Box>
                                <MenuItem>{user.email}</MenuItem>
                                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Box>

                {/* Error Handling Alerts */}
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

                {/* Dashboard Content */}
                {user && (
                    <>
                        <Heading mb="4" color="blue.600" fontSize="3xl" fontWeight="bold">
                            Welcome, {user.name}!
                        </Heading>
                        <Text mb="4" fontSize="lg" color="gray.600">
                            This is your dashboard.
                        </Text>

                        <SimpleGrid columns={[1, 2, 3]} spacing="8">
                            <Card sx={{ ...cardStyles.base, ...cardStyles.hover }}>
                                <CardBody>
                                    <VStack>
                                        <Icon as={FaClipboardList} boxSize={10} color="purple.600" />
                                        <Heading size="md" color="purple.600">
                                            Draft Application
                                        </Heading>
                                        <Text fontSize="2xl" color="purple.600">
                                            2
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>
                            <Card sx={{ ...cardStyles.base, ...cardStyles.hover }}>
                                <CardBody>
                                    <VStack>
                                        <Icon as={FaCheckCircle} boxSize={10} color="purple.600" />
                                        <Heading size="md" color="purple.600">
                                            Saved Application
                                        </Heading>
                                        <Text fontSize="2xl" color="purple.600">
                                            6
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </SimpleGrid>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Dashboard;

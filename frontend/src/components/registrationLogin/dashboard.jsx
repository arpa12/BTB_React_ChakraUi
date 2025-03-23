import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button, Alert, AlertIcon, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [logoutError, setLogoutError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            try {
                const response = await axios.get("http://127.0.0.1:8000/api/dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data.user);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.error("Error:", err.response);
                if (err.response && err.response.status === 401) {
                    setError("Your session has expired. Please log in again.");
                    localStorage.removeItem("token");
                    navigate("/login");
                } else {
                    setError("Failed to fetch user data. Please try again later.");
                }
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/logout", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log("Logout Response:", response.data);

            if (response.data.message === "User Logged Out Successfully") {
                localStorage.removeItem("token");
                navigate("/login");
            } else {
                setLogoutError("Failed to log out. Please try again.");
            }
        } catch (err) {
            console.error("Logout Error:", err.response);
            setLogoutError("Logout failed. Please try again.");
        }
    };

    if (loading) {
        return (
            <Box textAlign="center" mt="100px">
                <Spinner size="xl" />
            </Box>
        );
    }

    return (
        <Box
            maxW="lg"
            mx="auto"
            mt="100px"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
        >
            {error && (
                <Alert status="error" mb="4">
                    <AlertIcon />
                    {error}
                </Alert>
            )}

            {logoutError && (
                <Alert status="error" mb="4">
                    <AlertIcon />
                    {logoutError}
                </Alert>
            )}

            {user && (
                <>
                    <Heading mb="4" color="blue.600">Welcome, {user.name}!</Heading>
                    <Text mb="4">This is your dashboard. Your email: {user.email}</Text>
                    <Button colorScheme="red" onClick={handleLogout}>
                        Logout
                    </Button>
                </>
            )}
        </Box>
    );
};

export default Dashboard;

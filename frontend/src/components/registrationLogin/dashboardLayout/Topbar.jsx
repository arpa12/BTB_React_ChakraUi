import React, { useEffect, useState } from "react";
import {
    Flex,
    Heading,
    Avatar,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
    Spacer,
    useBreakpointValue,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Topbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const showProfileText = useBreakpointValue({ base: false, md: true });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        axios
            .get("http://127.0.0.1:8000/api/dashboard", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => setUser(res.data.user))
            .catch((err) => {
                console.error("Topbar Auth Error:", err);
                navigate("/login");
            });
    }, [navigate]);

    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        try {
            await axios.post(
                "http://127.0.0.1:8000/api/logout",
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            localStorage.removeItem("token");
            navigate("/login");
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    return (
        <Flex
            bg="white"
            p={{ base: 2, md: 4 }}
            shadow="md"
            align="center"
            justify="space-between"
        >
            <Heading size={{ base: "sm", md: "md" }} color="purple.600">
                Welcome, {user?.name || "User"}!
            </Heading>

            <Spacer />

            {user && (
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<FaUser />}
                        variant="outline"
                        colorScheme="purple"
                        size={{ base: "sm", md: "md" }}
                    >
                        {showProfileText && "Profile"}
                    </MenuButton>
                    <MenuList>
                        <Box p={4} textAlign="center">
                            <Avatar name={user.name} size="lg" mb={2} />
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm">{user.email}</Text>
                        </Box>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            )}
        </Flex>
    );
};

export default Topbar;

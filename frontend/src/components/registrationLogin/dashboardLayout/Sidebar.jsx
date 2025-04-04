import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <Box bg="purple.600" w="250px" p="6" color="white" height="100vh">
            <VStack spacing={4} align="stretch">
                <Button variant="ghost" color="white" onClick={() => navigate("/dashboard")}>
                    Dashboard
                </Button>
                <Button variant="ghost" color="white" onClick={() => navigate("/dashboard/applications")}>
                    Applications
                </Button>

            </VStack>
        </Box>
    );
};

export default Sidebar;

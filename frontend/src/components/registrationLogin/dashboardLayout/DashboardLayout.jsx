import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardHome from "../DashboardHome";
import ApplicationForm from "../../applications/applicationForm";
import ToLayout from "../../applications/toLayout";
import RegisterForm from "../../applications/tourOperator/RegisterForm"; // ✅ Fixed double slash

const DashboardLayout = () => {
    return (
        <Flex height="100vh">
            <Sidebar />
            <Flex direction="column" flex="1">
                {/* Always show Topbar */}
                <Topbar />
                <Box p="4" overflowY="auto" flex="1">
                    <Routes>
                        <Route path="/" element={<DashboardHome />} />
                        <Route path="applications" element={<ApplicationForm />} />
                        <Route path="applications/tour-operator" element={<ToLayout />} />
                        <Route path="applications/registration-form" element={<RegisterForm />} />
                    </Routes>
                </Box>
            </Flex>
        </Flex>
    );
};

export default DashboardLayout;

import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

// Layout components
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Dashboard pages
import DashboardHome from "../DashboardHome";

// Application forms and lists
import ApplicationForm from "../../applications/applicationForm";
import ToLayout from "../../applications/toLayout";
import RegisterForm from "../../applications/tourOperator/RegisterForm";
import ApplicationList from "../../applications/tourOperator/ApplicationsList";

const DashboardLayout = () => {
    return (
        <Flex height="100vh">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content area */}
            <Flex direction="column" flex="1">
                {/* Topbar always visible */}
                <Topbar />

                {/* Page content */}
                <Box p={4} overflowY="auto" flex="1">
                    <Routes>
                        {/* Dashboard home */}
                        <Route path="/" element={<DashboardHome />} />

                        {/* General application form */}
                        <Route path="applications" element={<ApplicationForm />} />

                        {/* Tour operator layout page */}
                        <Route path="applications/tour-operator" element={<ToLayout />} />

                        {/* Multi-step registration form */}
                        <Route path="applications/registration-form" element={<RegisterForm />} />

                        {/* Applications list for tour operators */}
                        <Route path="tour-operator/applications" element={<ApplicationList />} />
                    </Routes>
                </Box>
            </Flex>
        </Flex>
    );
};

export default DashboardLayout;

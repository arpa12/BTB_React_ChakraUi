import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
    const navigate = useNavigate();

    const handleTourOperatorClick = () => {
        navigate('/dashboard/applications/tour-operator');// This should be the route that renders the service selection page
    };

    return (
        <Box p="8">
                <Box
                    p="7"
                    boxShadow="md"
                    borderWidth="1px"
                    borderRadius="md"
                    _hover={{ boxShadow: 'xl', cursor: 'pointer' }}
                    onClick={handleTourOperatorClick}
                    width="400px"
                    textAlign="center"
                >
                    <Text fontSize="2xl" mb="2">টুর অপারেটর</Text>
                    <Text mb="4" fontSize="lg">(Tour Operator)</Text>
                    <Button colorScheme="blue">আবেদন (Application)</Button>
                </Box>
        </Box>
    );
};

export default ApplicationForm;

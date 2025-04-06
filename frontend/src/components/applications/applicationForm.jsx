import React from 'react';
import { Box, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
    const navigate = useNavigate();

    const handleTourOperatorClick = () => {
        navigate('/dashboard/applications/tour-operator');
    };

    const cardBg = useColorModeValue('white', 'gray.800');
    const hoverBg = useColorModeValue('gray.50', 'gray.700');

    return (
        <Box p={{ base: 4, md: 8 }}>
            <Box
                w={{ base: '100%', sm: '80%', md: '400px' }}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                borderWidth="1px"
                transition="all 0.2s"
                _hover={{
                    boxShadow: 'xl',
                    bg: hoverBg,
                    transform: 'translateY(-2px)',
                    cursor: 'pointer',
                }}
                onClick={handleTourOperatorClick}
                mx={{ base: 0, md: 2 }}
                p={{ base: 6, md: 8 }}
            >
                <Stack spacing={4} textAlign="center">
                    <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                        টুর অপারেটর
                    </Text>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
                        (Tour Operator)
                    </Text>
                    <Button colorScheme="blue" size="lg">
                        আবেদন (Application)
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default ApplicationForm;

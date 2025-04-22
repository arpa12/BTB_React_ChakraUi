import React, { useState } from 'react';
import {
    Box,
    Text,
    Button,
    Stack,
    useColorModeValue,
    Flex,
    Collapse,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ApplicationList from '../applications/tourOperator/ApplicationsList';

const ApplicationForm = () => {
    const navigate = useNavigate();
    const [showList, setShowList] = useState(false);

    const handleTourOperatorClick = () => {
        navigate('/dashboard/applications/tour-operator');
    };

    const cardBg = useColorModeValue('white', 'gray.800');
    const hoverBg = useColorModeValue('gray.100', 'gray.700');

    return (
        <Box minH="100vh" py={10} px={{ base: 4, md: 8 }} bg={useColorModeValue('gray.50', 'gray.900')}>
            <Flex justify="center">
                <Box
                    bg={cardBg}
                    borderRadius="2xl"
                    boxShadow="2xl"
                    maxW="md"
                    w="full"
                    p={{ base: 6, md: 8 }}
                    transition="all 0.3s ease"
                    _hover={{
                        bg: hoverBg,
                        transform: 'translateY(-5px)',
                        cursor: 'pointer',
                    }}
                    onClick={handleTourOperatorClick}
                >
                    <Stack spacing={5} textAlign="center">
                        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
                            টুর অপারেটর
                        </Text>
                        <Text fontSize="md" color="gray.500">
                            (Tour Operator)
                        </Text>
                        <Button colorScheme="blue" size="lg" width="full">
                            আবেদন (Application)
                        </Button>
                    </Stack>
                </Box>
            </Flex>

            <Box mt={10} textAlign="center">
                <Button onClick={() => setShowList(!showList)} colorScheme="teal" size="md" variant="outline">
                    {showList ? 'Hide Application List' : 'Show Application List'}
                </Button>
            </Box>

            <Collapse in={showList} animateOpacity>
                <Box mt={8}>
                    <ApplicationList />
                </Box>
            </Collapse>
        </Box>
    );
};

export default ApplicationForm;

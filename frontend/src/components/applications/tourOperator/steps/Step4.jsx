import React from 'react';
import {
    Box,
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
    VStack,
    Alert,
    AlertIcon,
    Divider,
    Stack,
    useBreakpointValue,
} from '@chakra-ui/react';

const Step4 = ({ formData, setFormData }) => {
    const inputSize = useBreakpointValue({ base: 'md', md: 'sm' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Box
            maxW="900px"
            mx="auto"
            bg="white"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            p={{ base: 5, md: 8 }}
            boxShadow="base"
        >
            <Text fontSize="xl" fontWeight="semibold" mb={6}>
                পেমেন্ট এবং সংরক্ষণ (Payment & Save)
            </Text>

            <Alert status="info" variant="subtle" borderRadius="md" mb={6}>
                <AlertIcon />
                Please enter your payment details to save the application.
            </Alert>

            <VStack spacing={6} align="stretch">
                <FormControl isRequired>
                    <FormLabel fontWeight="medium">
                        পেমেন্ট মাধ্যম (Payment Method)
                    </FormLabel>
                    <Select
                        name="method"
                        value={formData.method || ''}
                        onChange={handleChange}
                        placeholder="Select a method"
                        size={inputSize}
                        bg="gray.50"
                        _hover={{ bg: 'gray.100' }}
                        _focus={{ borderColor: 'blue.400' }}
                    >
                        <option value="bkash">bKash</option>
                        <option value="nagad">Nagad</option>
                        <option value="rocket">Rocket</option>
                        <option value="bank">Bank Transfer</option>
                    </Select>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel fontWeight="medium">
                        লেনদেন নম্বর (Transaction ID)
                    </FormLabel>
                    <Input
                        name="transaction_id"
                        value={formData.transaction_id || ''}
                        onChange={handleChange}
                        placeholder="Enter transaction ID"
                        size={inputSize}
                        bg="gray.50"
                        _hover={{ bg: 'gray.100' }}
                        _focus={{ borderColor: 'blue.400' }}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel fontWeight="medium">
                        টাকার পরিমাণ (Amount in BDT)
                    </FormLabel>
                    <Input
                        name="amount"
                        type="number"
                        value={formData.amount || ''}
                        onChange={handleChange}
                        placeholder="Enter amount"
                        size={inputSize}
                        bg="gray.50"
                        _hover={{ bg: 'gray.100' }}
                        _focus={{ borderColor: 'blue.400' }}
                    />
                </FormControl>
            </VStack>

            <Divider my={8} />

            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
                <Text fontSize="sm" color="gray.600">
                    Tip: Save your payment now — you can submit the full application later.
                </Text>
            </Stack>
        </Box>
    );
};

export default Step4;

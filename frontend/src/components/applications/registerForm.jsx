import React, { useState } from 'react';
import {
    Box,
    Button,
    RadioGroup,
    Radio,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Heading,
    Text,
    Alert,
    AlertIcon,
    Spinner,
} from '@chakra-ui/react';

const RegisterForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Handle radio button change
    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    // Handle input field change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        try {
            // Simulate form submission (replace with actual API call)
            console.log('Form data submitted:', formData);
            setLoading(false);
            alert('Form submitted successfully');
        } catch (err) {
            setLoading(false);
            setError('Failed to submit the form. Please try again.');
        }
    };

    return (
        <Box display="flex" minHeight="100vh" p="8" bg="gray.50">
            <Box flex="1">
                <Heading as="h2" size="xl" mb="4">
                    Application Form
                </Heading>

                {/* Show Radio buttons to select "Registration" */}
                <RadioGroup onChange={handleRadioChange} value={selectedOption} mb="4">
                    <VStack spacing="4" align="stretch">
                        <Radio value="registration">Register</Radio>
                    </VStack>
                </RadioGroup>

                {/* Show Registration Form when the "Registration" radio button is selected */}
                {selectedOption === 'registration' && (
                    <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="md">
                        <Heading as="h3" size="md" mb="4">
                            Registration Form
                        </Heading>

                        {/* Form Fields */}
                        <VStack spacing="4" align="stretch">
                            <FormControl isRequired>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </FormControl>

                            {/* Submit Button */}
                            <Button colorScheme="blue" onClick={handleSubmit} isLoading={loading}>
                                Submit
                            </Button>
                        </VStack>

                        {/* Error Alert */}
                        {error && (
                            <Alert status="error" mt="4">
                                <AlertIcon />
                                {error}
                            </Alert>
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default RegisterForm;

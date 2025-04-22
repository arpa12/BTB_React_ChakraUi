import React from 'react';
import { Box, Input, Select, Stack, FormControl, FormLabel, SimpleGrid } from '@chakra-ui/react';

const Step2 = ({ formData, handleChange }) => (
    <Box
        p={6}
        maxW="800px"
        mx="auto"
        borderRadius="lg"
        boxShadow="md"
        bg="white"
    >
        <Stack spacing={5}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl>
                    <FormLabel>Employee Name</FormLabel>
                    <Input
                        name="emp_name"
                        placeholder="Enter employee name"
                        value={formData.emp_name}
                        onChange={handleChange}
                        _focus={{ borderColor: 'teal.500' }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                        name="emp_address"
                        placeholder="Enter address"
                        value={formData.emp_address}
                        onChange={handleChange}
                        _focus={{ borderColor: 'teal.500' }}
                    />
                </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <Select
                        name="emp_gender"
                        value={formData.emp_gender}
                        onChange={handleChange}
                        placeholder="Select gender"
                        _focus={{ borderColor: 'teal.500' }}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Designation</FormLabel>
                    <Input
                        name="emp_designation"
                        placeholder="Enter designation"
                        value={formData.emp_designation}
                        onChange={handleChange}
                        _focus={{ borderColor: 'teal.500' }}
                    />
                </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl>
                    <FormLabel>Education</FormLabel>
                    <Input
                        name="emp_education"
                        placeholder="Enter education"
                        value={formData.emp_education}
                        onChange={handleChange}
                        _focus={{ borderColor: 'teal.500' }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Appointment Date</FormLabel>
                    <Input
                        name="emp_appointment_date"
                        type="date"
                        value={formData.emp_appointment_date}
                        onChange={handleChange}
                        _focus={{ borderColor: 'teal.500' }}
                    />
                </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl>
                    <FormLabel>Experience</FormLabel>
                    <Input
                        name="emp_experience"
                        placeholder="Enter experience"
                        value={formData.emp_experience}
                        onChange={handleChange}
                        _focus={{ borderColor: 'teal.500' }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Passport Number</FormLabel>
                    <Input
                        name="emp_passport"
                        placeholder="Enter passport number"
                        value={formData.emp_passport}
                        onChange={handleChange}
                        _focus={{ borderColor: 'teal.500' }}
                    />
                </FormControl>
            </SimpleGrid>
        </Stack>
    </Box>
);

export default Step2;

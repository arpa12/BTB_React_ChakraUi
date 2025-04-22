import React from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    Heading,
} from '@chakra-ui/react';

const Step1 = ({ formData, handleChange }) => (
    <Box
        p={8}
        px={{ base: 4, md: 10 }}
        borderRadius="2xl"
        boxShadow="lg"
        maxW={{ base: '100%', md: '1000px', lg: '2080px' }}
        mx="auto"
        w="100%"
    >
        <Heading size="md" mb={6} color="gray.700">
            Applicant Information
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl>
                <FormLabel>Applicant Name (BN)</FormLabel>
                <Input
                    name="applicant_name_bn"
                    value={formData.applicant_name_bn}
                    onChange={handleChange}
                    placeholder="Enter name in Bengali"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Applicant Name (EN)</FormLabel>
                <Input
                    name="applicant_name_en"
                    value={formData.applicant_name_en}
                    onChange={handleChange}
                    placeholder="Enter name in English"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Father's Name</FormLabel>
                <Input
                    name="applicant_father_name"
                    value={formData.applicant_father_name}
                    onChange={handleChange}
                    placeholder="Enter father's name"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Mother's Name</FormLabel>
                <Input
                    name="applicant_mother_name"
                    value={formData.applicant_mother_name}
                    onChange={handleChange}
                    placeholder="Enter mother's name"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select
                    name="applicant_gender"
                    value={formData.applicant_gender}
                    onChange={handleChange}
                    placeholder="Select gender"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Select>
            </FormControl>

            <FormControl>
                <FormLabel>Designation</FormLabel>
                <Input
                    name="applicant_designation"
                    value={formData.applicant_designation}
                    onChange={handleChange}
                    placeholder="Enter designation"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Mobile</FormLabel>
                <Input
                    name="applicant_mobile"
                    value={formData.applicant_mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                    name="applicant_phone"
                    value={formData.applicant_phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    name="applicant_email"
                    value={formData.applicant_email}
                    onChange={handleChange}
                    placeholder="Enter email"
                />
            </FormControl>
        </SimpleGrid>
    </Box>
);

export default Step1;

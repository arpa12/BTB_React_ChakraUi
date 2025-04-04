import React from "react";
import {
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    Divider,
} from "@chakra-ui/react";

const RegisterForm = () => {
    return (
        <Box bg="gray.50" p="6">
            {/* Page Title */}
            <Heading size="md" mb="6" textAlign="center">
                টুর অপারেটরের নিবন্ধনের জন্য আবেদন [Tour Operators Registration Application]
            </Heading>

            {/* Step Indicator */}
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb="6" textAlign="center">
                <Box
                    p="3"
                    borderRadius="full"
                    fontWeight="bold"
                    color="white"
                    bg="green.500"
                    boxShadow="sm"
                >
                    ১ ব্যাক্তিগত এবং ব্যবসায়িক তথ্য <br />
                    <Text fontSize="sm">(Personal and Business Information)</Text>
                </Box>
                <Box p="3" bg="gray.200" borderRadius="full">
                    ২ কর্মকর্তা-কর্মচারীদের বিবরণ <br />
                    <Text fontSize="sm">(Employee Details)</Text>
                </Box>
                <Box p="3" bg="gray.200" borderRadius="full">
                    ৩ সংযুক্তি <br />
                    <Text fontSize="sm">(Attachment)</Text>
                </Box>
                <Box p="3" bg="gray.200" borderRadius="full">
                    ৪ পেমেন্ট এবং সাবমিট <br />
                    <Text fontSize="sm">(Payment and Submission)</Text>
                </Box>
            </SimpleGrid>

            {/* Applicant Information Box */}
            <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
                <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                    ১. আবেদনকারীর তথ্য [Applicant Information]
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl isRequired>
                        <FormLabel>আবেদনকারীর নাম - বাংলা (Applicant's Name - Bangla)</FormLabel>
                        <Input placeholder="আবেদনকারীর নাম (বাংলা)" />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>আবেদনকারীর নাম - ইংরেজি (Applicant's Name - English)</FormLabel>
                        <Input placeholder="Applicant's Name (English)" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>পিতার নাম (Father's name)</FormLabel>
                        <Input placeholder="পিতার নাম" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>মাতার নাম (Mother's Name)</FormLabel>
                        <Input placeholder="মাতার নাম" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>লিঙ্গ (Gender)</FormLabel>
                        <Select placeholder="নির্বাচন করুন">
                            <option value="male">পুরুষ</option>
                            <option value="female">মহিলা</option>
                            <option value="other">অন্যান্য</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>পদবি (Designation)</FormLabel>
                        <Input placeholder="পদবি" />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>মোবাইল নং (Mobile No.)</FormLabel>
                        <Input type="tel" placeholder="মোবাইল নম্বর" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>ফোন নম্বর (Phone Number)</FormLabel>
                        <Input placeholder="ফোন নম্বর" />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>ইমেইল (Email)</FormLabel>
                        <Input type="email" placeholder="ইমেইল" />
                    </FormControl>
                </SimpleGrid>
            </Box>

            {/* Organization Information Section (Placeholder) */}
            <Box bg="white" p="6" borderRadius="md" boxShadow="md">
                <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                    ২. প্রতিষ্ঠানের তথ্য [Organization Information]
                </Heading>

                {/* You can continue building form fields here similar to above */}
                <Text color="gray.500">Organization fields go here...</Text>
            </Box>
        </Box>
    );
};

export default RegisterForm;

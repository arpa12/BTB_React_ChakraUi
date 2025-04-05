import React from "react";
import {
    Box,
    Heading,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Select
} from "@chakra-ui/react";

const Step1 = () => {
    return (
        <>
            {/* Section 1: Applicant Info */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
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

            {/* Section 2: Organization Information */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                    ২. প্রতিষ্ঠানের তথ্য [Organization Information]
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl>
                        <FormLabel>প্রতিষ্ঠানের নাম - বাংলা</FormLabel>
                        <Input placeholder="Organization Name (Bangla)" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>প্রতিষ্ঠানের নাম - ইংরেজি</FormLabel>
                        <Input placeholder="Organization Name (English)" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>ট্যুর অপারেটর টাইপ</FormLabel>
                        <Select placeholder="নির্বাচন করুন">
                            <option value="inbound">ইনবাউন্ড</option>
                            <option value="outbound">আউটবাউন্ড</option>
                            <option value="both">উভয়</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>প্রতিষ্ঠানের ধরণ</FormLabel>
                        <Input placeholder="প্রতিষ্ঠানের ধরণ" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>ওয়েবসাইট</FormLabel>
                        <Input placeholder="www.example.com" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>অবস্থান</FormLabel>
                        <Select placeholder="বেছে নিন">
                            <option>ঢাকা</option>
                            <option>চট্টগ্রাম</option>
                        </Select>
                    </FormControl>
                </SimpleGrid>
            </Box>

            {/* Section 3: Business Address */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                    ৩. ট্রেড লাইসেন্স অনুযায়ী ব্যবসার ঠিকানা
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl><FormLabel>বিভাগ</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>জেলা</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>উপজেলা</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>পোস্ট কোড</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ঠিকানা (বাংলা)</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ঠিকানা (ইংরেজি)</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ফোন নম্বর</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>মোবাইল নম্বর</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ইমেইল</FormLabel><Input /></FormControl>
                </SimpleGrid>
            </Box>

            {/* Section 4: Owner Info */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                    ৪. প্রতিষ্ঠানের মালিকের তথ্য
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl><FormLabel>নাম</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>পিতার নাম</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>মাতার নাম</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>জাতীয়তা</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>NID</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>জন্মতারিখ</FormLabel><Input type="date" /></FormControl>
                    <FormControl><FormLabel>পদবি</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ইমেইল</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>মোবাইল নম্বর</FormLabel><Input /></FormControl>
                </SimpleGrid>
            </Box>

            {/* Section 5: Owner's Permanent Address */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                    ৫. স্থায়ী ঠিকানা
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl><FormLabel>বিভাগ</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>জেলা</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>উপজেলা</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>পোস্ট কোড</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ঠিকানা (বাংলা)</FormLabel><Input /></FormControl>
                </SimpleGrid>
            </Box>

            {/* Section 6: Present Address */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                    ৬. বর্তমান ঠিকানা
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl><FormLabel>বিভাগ</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>জেলা</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>উপজেলা</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>পোস্ট কোড</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ঠিকানা</FormLabel><Input /></FormControl>
                </SimpleGrid>
            </Box>

            {/* Section 7: Tourist Management Numbers */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                    ৭. গত তিন বছরে পর্যটন ব্যবস্থাপনার সংখ্যা
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl><FormLabel>ইনবাউন্ড</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>আউটবাউন্ড</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ডোমেস্টিক</FormLabel><Input /></FormControl>
                </SimpleGrid>
            </Box>

            {/* Section 8: Trade License */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                    ৮. ট্রেড লাইসেন্স তথ্য
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl><FormLabel>সার্টিফিকেট নম্বর</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ইস্যুর তারিখ</FormLabel><Input type="date" /></FormControl>
                    <FormControl><FormLabel>অর্থবছর</FormLabel><Input /></FormControl>
                </SimpleGrid>
            </Box>

            {/* Section 9: Income Tax Certificate */}
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
                <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                    ৯. ইনকাম ট্যাক্স সার্টিফিকেট
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl><FormLabel>ইস্যুর তারিখ</FormLabel><Input type="date" /></FormControl>
                    <FormControl><FormLabel>অর্থবছর</FormLabel><Input /></FormControl>
                    <FormControl><FormLabel>ই-টিআইএন</FormLabel><Input /></FormControl>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default Step1;

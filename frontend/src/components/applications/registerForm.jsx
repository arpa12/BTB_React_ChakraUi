import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    Button,
    IconButton,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

// Step indicator labels
const steps = [
    {
        title: "১ ব্যাক্তিগত এবং ব্যবসায়িক তথ্য",
        subtitle: "(Personal and Business Information)",
    },
    {
        title: "২ কর্মকর্তা-কর্মচারীদের বিবরণ",
        subtitle: "(Employee Details)",
    },
    {
        title: "৩ সংযুক্তি",
        subtitle: "(Attachment)",
    },
    {
        title: "৪ পেমেন্ট এবং সাবমিট",
        subtitle: "(Payment and Submission)",
    },
];

// Step Indicator Component
const StepIndicator = ({ currentStep }) => (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={6} textAlign="center">
        {steps.map((stepItem, index) => (
            <Box
                key={index}
                p={3}
                borderRadius="full"
                fontWeight="bold"
                color={currentStep === index + 1 ? "white" : "black"}
                bg={currentStep === index + 1 ? "green.500" : "gray.200"}
                boxShadow="sm"
            >
                {stepItem.title}
                <Text fontSize="sm">{stepItem.subtitle}</Text>
            </Box>
        ))}
    </SimpleGrid>
);

// Step 1 Component (Full form based on your structure)
const Step1 = () => (
    <>
        {/* Section 1: Applicant Info */}
        <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
            <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                ১. আবেদনকারীর তথ্য [Applicant Information]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl isRequired>
                    <FormLabel>আবেদনকারীর নাম - বাংলা</FormLabel>
                    <Input placeholder="আবেদনকারীর নাম (বাংলা)" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>আবেদনকারীর নাম - ইংরেজি</FormLabel>
                    <Input placeholder="Applicant's Name (English)" />
                </FormControl>
                <FormControl><FormLabel>পিতার নাম</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>মাতার নাম</FormLabel><Input /></FormControl>
                <FormControl>
                    <FormLabel>লিঙ্গ</FormLabel>
                    <Select placeholder="নির্বাচন করুন">
                        <option value="male">পুরুষ</option>
                        <option value="female">মহিলা</option>
                        <option value="other">অন্যান্য</option>
                    </Select>
                </FormControl>
                <FormControl isRequired><FormLabel>পদবি</FormLabel><Input /></FormControl>
                <FormControl isRequired><FormLabel>মোবাইল নং</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ফোন নম্বর</FormLabel><Input /></FormControl>
                <FormControl isRequired><FormLabel>ইমেইল</FormLabel><Input /></FormControl>
            </SimpleGrid>
        </Box>

        {/*Section 2: Organization Information*/}
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
            <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                ২. প্রতিষ্ঠানের তথ্য [Organization Information]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl>
                    <FormLabel>প্রতিষ্ঠানের নাম - বাংলা (Organization Name - Bangla)</FormLabel>
                    <Input placeholder="Organization Name (Bangla)" />
                </FormControl>
                <FormControl>
                    <FormLabel>প্রতিষ্ঠানের নাম - ইংরেজি (Organization Name - English)</FormLabel>
                    <Input placeholder="Organization Name (English)" />
                </FormControl>
                <FormControl>
                    <FormLabel>ট্যুর অপারেটর টাইপ (Tour Operator Type)</FormLabel>
                    <Select placeholder="নির্বাচন করুন">
                        <option value="inbound">ইনবাউন্ড (Inbound)</option>
                        <option value="outbound">আউটবাউন্ড (Outbound)</option>
                        <option value="both">উভয় (Both)</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>প্রতিষ্ঠানের ধরণ (Organization Type)</FormLabel>
                    <Input placeholder="প্রতিষ্ঠানের ধরণ" />
                </FormControl>
                <FormControl>
                    <FormLabel>ওয়েবসাইট (Website)</FormLabel>
                    <Input placeholder="www.example.com" />
                </FormControl>
                <FormControl>
                    <FormLabel>অবস্থান (Organization Location)</FormLabel>
                    <Select placeholder="বেছে নিন (Select Location)">
                        <option>ঢাকা</option>
                        <option>চট্টগ্রাম</option>
                    </Select>
                </FormControl>
            </SimpleGrid>
        </Box>

        {/*Section 3: Business Address*/}
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
            <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                ৩. ট্রেড লাইসেন্স অনুযায়ী ব্যবসার ঠিকানা [Business Address (As per Trade License)]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl><FormLabel>বিভাগ (Division)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>জেলা (District)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>উপজেলা (Upazilla)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>পোস্ট কোড (Post Code)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ঠিকানা (বাংলা)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ঠিকানা (ইংরেজি)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ফোন নম্বর</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>মোবাইল নম্বর</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ইমেইল</FormLabel><Input /></FormControl>
            </SimpleGrid>
        </Box>

        {/*Section 4: Organization Owner's Information*/}
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
            <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                ৪. প্রতিষ্ঠানের মালিকের তথ্য [Organization Owner's Information]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl><FormLabel>নাম (Name)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>পিতার নাম (Father Name)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>মাতার নাম</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>জাতীয়তা (Nationality)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>NID</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>জন্মতারিখ (DOB)</FormLabel><Input type="date" /></FormControl>
                <FormControl><FormLabel>পদবি (Designation)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ইমেইল</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>মোবাইল নম্বর</FormLabel><Input /></FormControl>
            </SimpleGrid>
        </Box>

        {/*Section 5: Owner’s Permanent Address*/}
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
            <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                ৫. স্থায়ী ঠিকানা [Owner’s Permanent Address]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl><FormLabel>বিভাগ</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>জেলা</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>উপজেলা</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>পোস্ট কোড</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ঠিকানা (বাংলা)</FormLabel><Input /></FormControl>
            </SimpleGrid>
        </Box>

        {/*Section 6: Present Address*/}
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
            <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                ৬. বর্তমান ঠিকানা [Owner’s Present Address]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl><FormLabel>বিভাগ</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>জেলা</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>উপজেলা</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>পোস্ট কোড</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ঠিকানা</FormLabel><Input /></FormControl>
            </SimpleGrid>
        </Box>

        {/*Section 7: Tourist Management Numbers (Last 3 Years)*/}
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
            <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                ৭. গত তিন বছরে পর্যটন ব্যবস্থাপনার সংখ্যা [Tourist Management Numbers]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl><FormLabel>ইনবাউন্ড (Inbound)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>আউটবাউন্ড (Outbound)</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ডোমেস্টিক (Domestic)</FormLabel><Input /></FormControl>
            </SimpleGrid>
        </Box>

        {/*Section 8: Trade License*/}
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
            <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                ৮. ট্রেড লাইসেন্স তথ্য [Updated Trade License Information]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl><FormLabel>সার্টিফিকেট নম্বর</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ইস্যুর তারিখ</FormLabel><Input type="date" /></FormControl>
                <FormControl><FormLabel>অর্থবছর</FormLabel><Input /></FormControl>
            </SimpleGrid>
        </Box>

        {/*Section 9: Income Tax Certificate*/}
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" mb="6">
            <Heading size="md" mb="4" borderBottom="1px solid #ccc" pb="2">
                ৯. ইনকাম ট্যাক্স সার্টিফিকেট [Updated Income Tax Payment Certificate]
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl><FormLabel>ইস্যুর তারিখ</FormLabel><Input type="date" /></FormControl>
                <FormControl><FormLabel>অর্থবছর</FormLabel><Input /></FormControl>
                <FormControl><FormLabel>ই-টিআইএন</FormLabel><Input /></FormControl>
            </SimpleGrid>
        </Box>
    </>
);

// Step 2: Employee Details
const Step2 = () => {
    const [employees, setEmployees] = useState([
        {
            name: '',
            address: '',
            nationality: '',
            designation: '',
            education: '',
            appointmentDate: '',
            experience: '',
            nid: '',
            passport: ''
        }
    ]);

    const handleAddRow = () => {
        setEmployees([
            ...employees,
            {
                name: '',
                address: '',
                nationality: '',
                designation: '',
                education: '',
                appointmentDate: '',
                experience: '',
                nid: '',
                passport: ''
            }
        ]);
    };

    const handleRemoveRow = (index) => {
        const updated = [...employees];
        updated.splice(index, 1);
        setEmployees(updated.length ? updated : [
            {
                name: '',
                address: '',
                nationality: '',
                designation: '',
                education: '',
                appointmentDate: '',
                experience: '',
                nid: '',
                passport: ''
            }
        ]);
    };

    const handleChange = (index, field, value) => {
        const updated = [...employees];
        updated[index][field] = value;
        setEmployees(updated);
    };

    return (
        <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
            <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
                ২. কর্মকর্তা-কর্মচারীদের বিবরণ [Employee Details]
            </Heading>

            <Text fontSize="sm" color="gray.600" mb={4}>
                <strong>Note:</strong> জাতীয়তা বাংলাদেশী হলে জাতীয় পরিচয়পত্র নম্বর পূরণ করুন, অন্যথায় পাসপোর্ট নম্বর পূরণ করুন।
            </Text>

            <VStack spacing={4} align="start" w="full">
                {employees.map((employee, index) => (
                    <SimpleGrid
                        key={index}
                        minWidth="1000px"
                        columns={11}
                        spacing={3}
                        alignItems="flex-end"
                        w="full"
                    >
                        <FormControl><FormLabel fontSize="sm">নাম</FormLabel>
                            <Input size="sm" value={employee.name} onChange={(e) => handleChange(index, 'name', e.target.value)} />
                        </FormControl>

                        <FormControl><FormLabel fontSize="sm">ঠিকানা</FormLabel>
                            <Input size="sm" value={employee.address} onChange={(e) => handleChange(index, 'address', e.target.value)} />
                        </FormControl>

                        <FormControl><FormLabel fontSize="sm">জাতীয়তা</FormLabel>
                            <Select
                                size="sm"
                                placeholder="জাতীয়তা"
                                value={employee.nationality}
                                onChange={(e) => handleChange(index, 'nationality', e.target.value)}
                            >
                                <option value="bd">Bangladeshi</option>
                                <option value="other">Other</option>
                            </Select>
                        </FormControl>

                        <FormControl><FormLabel fontSize="sm">পদবর্ণনা</FormLabel>
                            <Input size="sm" value={employee.designation} onChange={(e) => handleChange(index, 'designation', e.target.value)} />
                        </FormControl>

                        <FormControl><FormLabel fontSize="sm">শিক্ষাগত যোগ্যতা</FormLabel>
                            <Input size="sm" value={employee.education} onChange={(e) => handleChange(index, 'education', e.target.value)} />
                        </FormControl>

                        <FormControl><FormLabel fontSize="sm">নিয়োগ তারিখ</FormLabel>
                            <Input size="sm" type="date" value={employee.appointmentDate} onChange={(e) => handleChange(index, 'appointmentDate', e.target.value)} />
                        </FormControl>

                        <FormControl><FormLabel fontSize="sm">অভিজ্ঞতা</FormLabel>
                            <Input size="sm" value={employee.experience} onChange={(e) => handleChange(index, 'experience', e.target.value)} />
                        </FormControl>

                        <FormControl><FormLabel fontSize="sm">NID</FormLabel>
                            <Input size="sm" value={employee.nid} onChange={(e) => handleChange(index, 'nid', e.target.value)} />
                        </FormControl>

                        <FormControl><FormLabel fontSize="sm">পাসপোর্ট</FormLabel>
                            <Input size="sm" value={employee.passport} onChange={(e) => handleChange(index, 'passport', e.target.value)} />
                        </FormControl>

                        <HStack mt={6}>
                            {/* Only show delete icon if NOT first row */}
                            {index !== 0 && (
                                <IconButton
                                    icon={<DeleteIcon />}
                                    size="sm"
                                    colorScheme="red"
                                    onClick={() => handleRemoveRow(index)}
                                    aria-label="Remove"
                                />
                            )}
                            {/* Only show add icon on the last row */}
                            {index === employees.length - 1 && (
                                <IconButton
                                    icon={<AddIcon />}
                                    size="sm"
                                    colorScheme="blue"
                                    onClick={handleAddRow}
                                    aria-label="Add"
                                />
                            )}
                        </HStack>
                    </SimpleGrid>
                ))}
            </VStack>
        </Box>
    );
};

// Step 3: Attachments
const Step3 = () => (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
        <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
            ৩. সংযুক্তি [Attachment]
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
            <FormControl>
                <FormLabel>ট্রেড লাইসেন্স (Trade License)</FormLabel>
                <Input type="file" />
            </FormControl>
            <FormControl>
                <FormLabel>ইনকাম ট্যাক্স সার্টিফিকেট</FormLabel>
                <Input type="file" />
            </FormControl>
        </SimpleGrid>
    </Box>
);

// Step 4: Payment & Submission
const Step4 = () => (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md" mb={6}>
        <Heading size="md" mb={4} borderBottom="1px solid #ccc" pb={2}>
            ৪. পেমেন্ট এবং সাবমিট [Payment and Submission]
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl>
                <FormLabel>লেনদেন আইডি (Transaction ID)</FormLabel>
                <Input placeholder="Transaction ID" />
            </FormControl>
            <FormControl>
                <FormLabel>পেমেন্ট তারিখ</FormLabel>
                <Input type="date" />
            </FormControl>
        </SimpleGrid>
    </Box>
);

// Main Register Form
const RegisterForm = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

    const renderStepContent = () => {
        switch (step) {
            case 1: return <Step1 />;
            case 2: return <Step2 />;
            case 3: return <Step3 />;
            case 4: return <Step4 />;
            default: return null;
        }
    };

    return (
        <Box bg="gray.50" p={6}>
            <Heading size="md" mb={6} textAlign="center">
                টুর অপারেটরের নিবন্ধনের জন্য আবেদন [Tour Operators Registration Application]
            </Heading>

            <StepIndicator currentStep={step} />
            {renderStepContent()}

            <Box mt={6} display="flex" justifyContent="space-between" flexWrap="wrap" gap={4}>
                {/* Save as Draft button */}
                <Button variant="outline" colorScheme="gray" onClick={() => alert("Draft saved!")}>
                    খসড়া করুন (Save as Draft)
                </Button>

                <Box display="flex" gap={3}>
                    <Button onClick={handlePrev} isDisabled={step === 1} variant="outline">
                        পূর্ববর্তী (Previous)
                    </Button>
                    {step < steps.length ? (
                        <Button colorScheme="blue" onClick={handleNext}>
                            পরবর্তী (Next)
                        </Button>
                    ) : (
                        <Button colorScheme="green" type="submit">
                            জমা দিন (Submit)
                        </Button>
                    )}
                </Box>
            </Box>

        </Box>
    );
};

export default RegisterForm;

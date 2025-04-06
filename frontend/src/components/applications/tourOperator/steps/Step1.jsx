import React from "react";
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Select,
    useColorModeValue,
    Container,
} from "@chakra-ui/react";

// Reusable styled section wrapper
const Section = ({ title, subtitle, children }) => {
    const borderColor = useColorModeValue("gray.200", "gray.700");
    return (
        <Box
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="lg"
            boxShadow="lg"
            mb={8}
            border="1px solid"
            borderColor={borderColor}
        >
            <Box mb={6}>
                <Heading size="md" mb={1} color="gray.800">
                    {title}
                </Heading>
                {subtitle && (
                    <Text fontSize="sm" color="gray.500">
                        {subtitle}
                    </Text>
                )}
            </Box>
            {children}
        </Box>
    );
};

// Input with modern variant
const ModernInput = (props) => (
    <Input
        variant="filled"
        bg="gray.50"
        _focus={{ bg: "white", borderColor: "blue.300" }}
        _hover={{ bg: "gray.100" }}
        {...props}
    />
);

const ModernSelect = (props) => (
    <Select
        variant="filled"
        bg="gray.50"
        _focus={{ bg: "white", borderColor: "blue.300" }}
        _hover={{ bg: "gray.100" }}
        {...props}
    />
);

// Dataset for dynamic form rendering
const formSections = [
    {
        title: "১. আবেদনকারীর তথ্য",
        subtitle: "Applicant Information",
        fields: [
            { label: "আবেদনকারীর নাম - বাংলা", type: "text", required: true, placeholder: "বাংলা নাম লিখুন" },
            { label: "Applicant's Name - English", type: "text", required: true, placeholder: "Enter name in English" },
            { label: "পিতার নাম", type: "text", placeholder: "পিতার নাম লিখুন" },
            { label: "মাতার নাম", type: "text", placeholder: "মাতার নাম লিখুন" },
            { label: "লিঙ্গ", type: "select", options: ["পুরুষ", "মহিলা", "অন্যান্য"] },
            { label: "পদবি", type: "text", required: true, placeholder: "আপনার পদবি লিখুন" },
            { label: "মোবাইল নং", type: "tel", required: true, placeholder: "১১ ডিজিট মোবাইল নম্বর লিখুন" },
            { label: "ফোন নম্বর", type: "text", placeholder: "ফোন নম্বর লিখুন (যদি থাকে)" },
            { label: "ইমেইল", type: "email", required: true, placeholder: "example@email.com" },
        ],
    },
    {
        title: "২. প্রতিষ্ঠানের তথ্য",
        subtitle: "Organization Information",
        fields: [
            { label: "প্রতিষ্ঠানের নাম - বাংলা", type: "text", placeholder: "বাংলায় প্রতিষ্ঠানের নাম লিখুন" },
            { label: "প্রতিষ্ঠানের নাম - ইংরেজি", type: "text", placeholder: "Enter organization name in English" },
            { label: "ট্যুর অপারেটর টাইপ", type: "select", options: ["ইনবাউন্ড", "আউটবাউন্ড", "উভয়"] },
            { label: "প্রতিষ্ঠানের ধরণ", type: "text", placeholder: "প্রতিষ্ঠানের ধরণ লিখুন" },
            { label: "ওয়েবসাইট", type: "text", placeholder: "www.example.com" },
            { label: "অবস্থান", type: "select", options: ["ঢাকা", "চট্টগ্রাম"] },
        ],
    },
    {
        title: "৩. ট্রেড লাইসেন্স অনুযায়ী ব্যবসার ঠিকানা",
        fields: [
            { label: "বিভাগ", type: "text", placeholder: "বিভাগ লিখুন" },
            { label: "জেলা", type: "text", placeholder: "জেলা লিখুন" },
            { label: "উপজেলা", type: "text", placeholder: "উপজেলা লিখুন" },
            { label: "পোস্ট কোড", type: "text", placeholder: "পোস্ট কোড লিখুন" },
            { label: "ঠিকানা (বাংলা)", type: "text", placeholder: "বাংলায় ঠিকানা লিখুন" },
            { label: "ঠিকানা (ইংরেজি)", type: "text", placeholder: "Address in English" },
            { label: "ফোন নম্বর", type: "text", placeholder: "ফোন নম্বর লিখুন" },
            { label: "মোবাইল নম্বর", type: "text", placeholder: "মোবাইল নম্বর লিখুন" },
            { label: "ইমেইল", type: "email", placeholder: "example@email.com" },
        ],
    },
    {
        title: "৪. প্রতিষ্ঠানের মালিকের তথ্য",
        fields: [
            { label: "নাম", type: "text", placeholder: "মালিকের নাম লিখুন" },
            { label: "পিতার নাম", type: "text", placeholder: "পিতার নাম লিখুন" },
            { label: "মাতার নাম", type: "text", placeholder: "মাতার নাম লিখুন" },
            { label: "জাতীয়তা", type: "text", placeholder: "জাতীয়তা লিখুন" },
            { label: "NID", type: "text", placeholder: "জাতীয় পরিচয়পত্র নম্বর লিখুন" },
            { label: "জন্মতারিখ", type: "date" },
            { label: "পদবি", type: "text", placeholder: "মালিকের পদবি লিখুন" },
            { label: "ইমেইল", type: "email", placeholder: "owner@email.com" },
            { label: "মোবাইল নম্বর", type: "text", placeholder: "মোবাইল নম্বর লিখুন" },
        ],
    },
    {
        title: "৫. স্থায়ী ঠিকানা",
        fields: [
            { label: "বিভাগ", type: "text", placeholder: "বিভাগ লিখুন" },
            { label: "জেলা", type: "text", placeholder: "জেলা লিখুন" },
            { label: "উপজেলা", type: "text", placeholder: "উপজেলা লিখুন" },
            { label: "পোস্ট কোড", type: "text", placeholder: "পোস্ট কোড লিখুন" },
            { label: "ঠিকানা (বাংলা)", type: "text", placeholder: "বাংলায় ঠিকানা লিখুন" },
        ],
    },
    {
        title: "৬. বর্তমান ঠিকানা",
        fields: [
            { label: "বিভাগ", type: "text", placeholder: "বর্তমান বিভাগ লিখুন" },
            { label: "জেলা", type: "text", placeholder: "বর্তমান জেলা লিখুন" },
            { label: "উপজেলা", type: "text", placeholder: "বর্তমান উপজেলা লিখুন" },
            { label: "পোস্ট কোড", type: "text", placeholder: "পোস্ট কোড লিখুন" },
            { label: "ঠিকানা", type: "text", placeholder: "বর্তমান ঠিকানা লিখুন" },
        ],
    },
    {
        title: "৭. গত তিন বছরে পর্যটন ব্যবস্থাপনার সংখ্যা",
        fields: [
            { label: "ইনবাউন্ড", type: "number", placeholder: "ইনবাউন্ড ট্যুর সংখ্যা" },
            { label: "আউটবাউন্ড", type: "number", placeholder: "আউটবাউন্ড ট্যুর সংখ্যা" },
            { label: "ডোমেস্টিক", type: "number", placeholder: "ডোমেস্টিক ট্যুর সংখ্যা" },
        ],
    },
    {
        title: "৮. ট্রেড লাইসেন্স তথ্য",
        fields: [
            { label: "সার্টিফিকেট নম্বর", type: "text", placeholder: "সার্টিফিকেট নম্বর লিখুন" },
            { label: "ইস্যুর তারিখ", type: "date" },
            { label: "অর্থবছর", type: "text", placeholder: "অর্থবছর লিখুন (যেমন: ২০২৩-২৪)" },
        ],
    },
    {
        title: "৯. ইনকাম ট্যাক্স সার্টিফিকেট",
        fields: [
            { label: "ইস্যুর তারিখ", type: "date" },
            { label: "অর্থবছর", type: "text", placeholder: "অর্থবছর লিখুন (যেমন: ২০২৩-২৪)" },
            { label: "ই-টিআইএন", type: "text", placeholder: "ই-টিআইএন নম্বর লিখুন" },
        ],
    },
];

const Step1 = () => {
    return (
        <Container maxW="6xl" py={10}>
            {formSections.map((section, idx) => (
                <Section
                    key={idx}
                    title={section.title}
                    subtitle={section.subtitle}
                >
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        {section.fields.map((field, fieldIdx) => (
                            <FormControl
                                key={fieldIdx}
                                isRequired={field.required}
                            >
                                <FormLabel>{field.label}</FormLabel>
                                {field.type === "select" ? (
                                    <ModernSelect placeholder="নির্বাচন করুন">
                                        {field.options.map((opt, optIdx) => (
                                            <option key={optIdx}>{opt}</option>
                                        ))}
                                    </ModernSelect>
                                ) : (
                                    <ModernInput
                                        type={field.type}
                                        placeholder={field.placeholder}
                                    />
                                )}
                            </FormControl>
                        ))}
                    </SimpleGrid>
                </Section>
            ))}
        </Container>
    );
};

export default Step1;

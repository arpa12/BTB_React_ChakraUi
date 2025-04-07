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

// 🔁 Section Wrapper for each form section
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

// 🌟 Styled Inputs
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

// 📋 Form Configuration
const formSections = [
    {
        title: "১. আবেদনকারীর তথ্য",
        subtitle: "Applicant Information",
        prefix: "applicant",
        fields: [
            { name: "name_bn", label: "আবেদনকারীর নাম - বাংলা", type: "text", required: true, placeholder: "বাংলা নাম লিখুন" },
            { name: "name_en", label: "Applicant's Name - English", type: "text", required: true, placeholder: "Enter name in English" },
            { name: "father_name", label: "পিতার নাম", type: "text", placeholder: "পিতার নাম লিখুন" },
            { name: "mother_name", label: "মাতার নাম", type: "text", placeholder: "মাতার নাম লিখুন" },
            { name: "gender", label: "লিঙ্গ", type: "select", options: ["পুরুষ", "মহিলা", "অন্যান্য"] },
            { name: "designation", label: "পদবি", type: "text", required: true, placeholder: "আপনার পদবি লিখুন" },
            { name: "mobile", label: "মোবাইল নং", type: "tel", required: true, placeholder: "১১ ডিজিট মোবাইল নম্বর লিখুন" },
            { name: "phone", label: "ফোন নম্বর", type: "text", placeholder: "ফোন নম্বর লিখুন (যদি থাকে)" },
            { name: "email", label: "ইমেইল", type: "email", required: true, placeholder: "example@email.com" },
        ],
    },
    {
        title: "২. প্রতিষ্ঠানের তথ্য",
        subtitle: "Organization Information",
        prefix: "organization",
        fields: [
            { name: "org_name_bn", label: "প্রতিষ্ঠানের নাম - বাংলা", type: "text", placeholder: "বাংলায় প্রতিষ্ঠানের নাম লিখুন" },
            { name: "org_name_en", label: "প্রতিষ্ঠানের নাম - ইংরেজি", type: "text", placeholder: "Enter organization name in English" },
            { name: "tour_operator_type", label: "ট্যুর অপারেটর টাইপ", type: "select", options: ["ইনবাউন্ড", "আউটবাউন্ড", "উভয়"] },
            { name: "org_type", label: "প্রতিষ্ঠানের ধরণ", type: "text", placeholder: "প্রতিষ্ঠানের ধরণ লিখুন" },
            { name: "website", label: "ওয়েবসাইট", type: "text", placeholder: "www.example.com" },
            { name: "location", label: "অবস্থান", type: "select", options: ["ঢাকা", "চট্টগ্রাম"] },
        ],
    },
    {
        title: "৩. ট্রেড লাইসেন্স অনুযায়ী ব্যবসার ঠিকানা",
        prefix: "business_address",
        fields: [
            { name: "division", label: "বিভাগ", type: "text", placeholder: "বিভাগ লিখুন" },
            { name: "district", label: "জেলা", type: "text", placeholder: "জেলা লিখুন" },
            { name: "upazila", label: "উপজেলা", type: "text", placeholder: "উপজেলা লিখুন" },
            { name: "post_code", label: "পোস্ট কোড", type: "text", placeholder: "পোস্ট কোড লিখুন" },
            { name: "address_bn", label: "ঠিকানা (বাংলা)", type: "text", placeholder: "বাংলায় ঠিকানা লিখুন" },
            { name: "address_en", label: "ঠিকানা (ইংরেজি)", type: "text", placeholder: "Address in English" },
            { name: "phone", label: "ফোন নম্বর", type: "text", placeholder: "ফোন নম্বর লিখুন" },
            { name: "mobile", label: "মোবাইল নম্বর", type: "text", placeholder: "মোবাইল নম্বর লিখুন" },
            { name: "email", label: "ইমেইল", type: "email", placeholder: "example@email.com" },
        ],
    },
    {
        title: "৪. মালিকের তথ্য",
        subtitle: "Owner Information",
        prefix: "owner",
        fields: [
            { name: "owner_name", label: "মালিকের নাম", type: "text", required: true, placeholder: "মালিকের নাম লিখুন" },
            { name: "owner_father_name", label: "পিতার নাম", type: "text", required: true, placeholder: "পিতার নাম লিখুন" },
            { name: "owner_mother_name", label: "মাতার নাম", type: "text", required: true, placeholder: "মাতার নাম লিখুন" },
            { name: "nationality", label: "জাতীয়তা", type: "text", required: true, placeholder: "জাতীয়তা লিখুন" },
            { name: "nid", label: "জাতীয় পরিচয়পত্র নং", type: "text", required: true, placeholder: "জাতীয় পরিচয়পত্র নং লিখুন" },
            { name: "dob", label: "জন্মতারিখ", type: "date", required: true },
            { name: "owner_designation", label: "পদবি", type: "text", required: true, placeholder: "পদবি লিখুন" },
            { name: "owner_email", label: "ইমেইল", type: "email", required: true, placeholder: "example@email.com" },
            { name: "owner_mobile", label: "মোবাইল নম্বর", type: "tel", required: true, placeholder: "১১ ডিজিট মোবাইল নম্বর লিখুন" },
        ],
    },
    {
        title: "৫. স্থায়ী ঠিকানা",
        subtitle: "Permanent Address",
        prefix: "permanent_address",
        fields: [
            { name: "permanent_division", label: "বিভাগ", type: "text", required: true, placeholder: "বিভাগ লিখুন" },
            { name: "permanent_district", label: "জেলা", type: "text", required: true, placeholder: "জেলা লিখুন" },
            { name: "permanent_upazila", label: "উপজেলা", type: "text", required: true, placeholder: "উপজেলা লিখুন" },
            { name: "permanent_post_code", label: "পোস্ট কোড", type: "text", required: true, placeholder: "পোস্ট কোড লিখুন" },
            { name: "permanent_address", label: "ঠিকানা", type: "text", required: true, placeholder: "ঠিকানা লিখুন" },
        ],
    },
    {
        title: "৬. বর্তমান ঠিকানা",
        subtitle: "Current Address",
        prefix: "current_address",
        fields: [
            { name: "current_division", label: "বিভাগ", type: "text", required: true, placeholder: "বিভাগ লিখুন" },
            { name: "current_district", label: "জেলা", type: "text", required: true, placeholder: "জেলা লিখুন" },
            { name: "current_upazila", label: "উপজেলা", type: "text", required: true, placeholder: "উপজেলা লিখুন" },
            { name: "current_post_code", label: "পোস্ট কোড", type: "text", required: true, placeholder: "পোস্ট কোড লিখুন" },
            { name: "current_address", label: "ঠিকানা", type: "text", required: true, placeholder: "ঠিকানা লিখুন" },
        ],
    },
    {
        title: "৭. অন্যান্য তথ্য",
        subtitle: "Other Information",
        prefix: "other_info",
        fields: [
            { name: "inbound_count", label: "ইনবাউন্ড সংখ্যাঃ", type: "number", required: true },
            { name: "outbound_count", label: "আউটবাউন্ড সংখ্যাঃ", type: "number", required: true },
            { name: "domestic_count", label: "ডোমেস্টিক সংখ্যাঃ", type: "number", required: true },
            { name: "certificate_number", label: "সার্টিফিকেট নম্বর", type: "text", required: true, placeholder: "সার্টিফিকেট নম্বর লিখুন" },
            { name: "issue_date", label: "জারি তারিখ", type: "date", required: true },
            { name: "fiscal_year", label: "আর্থিক বছর", type: "text", required: true, placeholder: "আর্থিক বছর লিখুন" },
            { name: "tax_issue_date", label: "ট্যাক্স জারি তারিখ", type: "date", required: true },
            { name: "tax_fiscal_year", label: "ট্যাক্স আর্থিক বছর", type: "text", required: true, placeholder: "ট্যাক্স আর্থিক বছর লিখুন" },
            { name: "e_tin", label: "ই-টিন", type: "text", required: true, placeholder: "ই-টিন লিখুন" },
        ],
    },
];

// ✅ Step 1 Component
const Step1 = ({ formData, setFormData }) => {
    // Function to handle change of form fields
    const handleChange = (prefix, name, value) => {
        setFormData((prev) => ({
            ...prev,
            step1: {
                ...(prev.step1 || {}),
                [prefix]: {
                    ...(prev.step1?.[prefix] || {}),
                    [name]: value,
                },
            },
        }));
    };

    return (
        <Container maxW="6xl" py={10}>
            {formSections.map((section, idx) => (
                <Section key={idx} title={section.title} subtitle={section.subtitle}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        {section.fields.map((field, fieldIdx) => {
                            const value = formData?.step1?.[section.prefix]?.[field.name] || "";

                            return (
                                <FormControl key={fieldIdx} isRequired={field.required}>
                                    <FormLabel>{field.label}</FormLabel>
                                    {field.type === "select" ? (
                                        <ModernSelect
                                            name={field.name}
                                            placeholder="নির্বাচন করুন"
                                            value={value}
                                            onChange={(e) =>
                                                handleChange(section.prefix, field.name, e.target.value)
                                            }
                                        >
                                            {field.options.map((opt, optIdx) => (
                                                <option key={optIdx} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </ModernSelect>
                                    ) : (
                                        <ModernInput
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={value}
                                            onChange={(e) =>
                                                handleChange(section.prefix, field.name, e.target.value)
                                            }
                                        />
                                    )}
                                </FormControl>
                            );
                        })}
                    </SimpleGrid>
                </Section>
            ))}
        </Container>
    );
};

export default Step1;

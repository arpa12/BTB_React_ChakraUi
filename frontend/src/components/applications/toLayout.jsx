import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    Radio,
    RadioGroup,
    Stack,
    Text,
    Heading,
    useColorModeValue,
    Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ToLayout = () => {
    const [selectedService, setSelectedService] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        if (!selectedService) {
            alert("Please select a service first.");
            return;
        }

        if (selectedService === "registration") {
            navigate("/dashboard/applications/registration-form");
        } else {
            alert(`Form for '${selectedService}' not implemented yet.`);
        }
    };

    const handleCancel = () => {
        setSelectedService("");
    };

    const cardBg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const headingColor = useColorModeValue("blue.600", "blue.300");

    return (
        <Box p={{ base: 4, md: 8 }}>
            <Flex
                direction={{ base: "column", md: "row" }}
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="lg"
                boxShadow="lg"
                p={{ base: 6, md: 10 }}
                gap={{ base: 8, md: 10 }}
            >
                {/* Left: Info Section */}
                <Box flex="1">
                    <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        mb={4}
                        color={headingColor}
                    >
                        টুর অপারেটর (Tour Operator)
                    </Heading>
                    <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" lineHeight="tall">
                        টুর অপারেটর হলো একটি কোম্পানি বা ব্যক্তি যেটি পর্যটকদের জন্য একটি প্রোগ্রাম পরিকল্পনা করে এবং ক্রিয়াকলাপ সংগঠিত করে। তারা হোটেল বুকিং, পরিবহন, গাইডিং এবং অন্যান্য পরিষেবা প্রদান করে। বাংলাদেশে টুর অপারেটরদের নিবন্ধনের মাধ্যমে পর্যটন শিল্পে পেশাদারিত্ব ও মান নিশ্চিত করা হয়।
                    </Text>
                </Box>

                {/* Divider (hide on small screens) */}
                <Divider
                    orientation="vertical"
                    display={{ base: "none", md: "block" }}
                    h="auto"
                    borderColor="gray.300"
                />

                {/* Right: Service Selection */}
                <Box flex="1">
                    <Heading
                        size="md"
                        mb={4}
                        textAlign="center"
                        color={headingColor}
                    >
                        পরিষেবা নির্বাচন করুন
                    </Heading>
                    <RadioGroup onChange={setSelectedService} value={selectedService}>
                        <Stack spacing={4}>
                            <Radio value="registration">নিবন্ধন (Registration)</Radio>
                            <Radio value="renewal">নবায়ন (Renewal)</Radio>
                            <Radio value="cancellation">বাতিল (Cancellation)</Radio>
                            <Radio value="amendment">সংশোধন (Amendment)</Radio>
                            <Radio value="appeal">আপিল (Appeal)</Radio>
                            <Radio value="duplicate">ডুপ্লিকেট (Duplicate)</Radio>
                        </Stack>
                    </RadioGroup>

                    <Flex
                        mt={8}
                        direction={{ base: "column", sm: "row" }}
                        justify="flex-end"
                        gap={4}
                    >
                        <Button
                            variant="outline"
                            colorScheme="gray"
                            onClick={handleCancel}
                            w={{ base: "100%", sm: "auto" }}
                        >
                            বাতিল (Cancel)
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={handleNext}
                            w={{ base: "100%", sm: "auto" }}
                        >
                            পরবর্তী (Next)
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default ToLayout;

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

    return (
        <Flex
            direction="row"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p="8"
            gap="10"
            align="flex-start"
        >
            {/* Left: Info Section */}
            <Box flex="1">
                <Heading fontSize="2xl" mb="4">
                    টুর অপারেটর (Tour Operator)
                </Heading>
                <Text fontSize="md" color="gray.700">
                    টুর অপারেটর হলো একটি কোম্পানি বা ব্যক্তি যেটি পর্যটকদের জন্য একটি প্রোগ্রাম পরিকল্পনা করে এবং ক্রিয়াকলাপ সংগঠিত করে। তারা হোটেল বুকিং, পরিবহন, গাইডিং এবং অন্যান্য পরিষেবা প্রদান করে। বাংলাদেশে টুর অপারেটরদের নিবন্ধনের মাধ্যমে পর্যটন শিল্পে পেশাদারিত্ব ও মান নিশ্চিত করা হয়।
                </Text>
            </Box>

            {/* Right: Service Selection */}
            <Box flex="1">
                <Heading size="md" mb="4" textAlign="center">
                    Select your service
                </Heading>
                <RadioGroup onChange={setSelectedService} value={selectedService}>
                    <Stack spacing="4">
                        <Radio value="registration">নিবন্ধন (Registration)</Radio>
                        <Radio value="renewal">নবায়ন (Renewal)</Radio>
                        <Radio value="cancellation">বাতিল (Cancellation)</Radio>
                        <Radio value="amendment">সংশোধন (Amendment)</Radio>
                        <Radio value="appeal">আপিল (Appeal)</Radio>
                        <Radio value="duplicate">ডুপ্লিকেট (Duplicate)</Radio>
                    </Stack>
                </RadioGroup>

                <Flex mt="6" justify="space-between">
                    <Button colorScheme="gray" onClick={handleCancel}>
                        বাতিল (Cancel)
                    </Button>
                    <Button colorScheme="blue" onClick={handleNext}>
                        পরবর্তী (Next)
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};

export default ToLayout;

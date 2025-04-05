// StepIndicator.jsx
import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const steps = [
    { title: "১ ব্যাক্তিগত এবং ব্যবসায়িক তথ্য", subtitle: "(Personal and Business Information)" },
    { title: "২ কর্মকর্তা-কর্মচারীদের বিবরণ", subtitle: "(Employee Details)" },
    { title: "৩ সংযুক্তি", subtitle: "(Attachment)" },
    { title: "৪ পেমেন্ট এবং সাবমিট", subtitle: "(Payment and Submission)" },
];

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

export default StepIndicator;

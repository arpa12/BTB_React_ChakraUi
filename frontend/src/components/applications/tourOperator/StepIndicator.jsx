import React from "react";
import {
    Box,
    Flex,
    Text,
    Stack,
    Divider,
    useBreakpointValue,
} from "@chakra-ui/react";

const steps = [
    { title: "১", label: "ব্যাক্তিগত ও ব্যবসায়িক তথ্য", subtitle: "Personal and Business Information" },
    { title: "২", label: "কর্মকর্তা/কর্মচারী বিবরণ", subtitle: "Employee Details" },
    { title: "৩", label: "সংযুক্তি", subtitle: "Attachment" },
    { title: "৪", label: "পেমেন্ট এবং সাবমিট", subtitle: "Payment and Submission" },
];

const StepIndicator = ({ currentStep }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            bg="gray.100"
            p={4}
            borderRadius="md"
            boxShadow="sm"
            gap={{ base: 6, md: 0 }}
        >
            {steps.map((step, index) => {
                const isActive = currentStep === index + 1;
                const isCompleted = currentStep > index + 1;

                return (
                    <Flex
                        key={index}
                        flex={1}
                        direction="column"
                        align="center"
                        position="relative"
                        minW="70px"
                    >
                        {/* Circle with number */}
                        <Flex
                            w="40px"
                            h="40px"
                            align="center"
                            justify="center"
                            borderRadius="full"
                            bg={isActive || isCompleted ? "green.600" : "gray.300"}
                            color="white"
                            fontWeight="bold"
                            zIndex={1}
                        >
                            {step.title}
                        </Flex>

                        {/* Connector line */}
                        {index !== steps.length - 1 && !isMobile && (
                            <Box
                                position="absolute"
                                top="20px"
                                right="-50%"
                                h="2px"
                                w="100%"
                                bg={currentStep > index + 1 ? "green.600" : "gray.300"}
                                zIndex={0}
                            />
                        )}

                        {/* Labels */}
                        <Stack spacing={0} mt={2} textAlign="center">
                            <Text fontSize="sm" fontWeight="medium">
                                {step.label}
                            </Text>
                            <Text fontSize="xs" color="gray.600">
                                ({step.subtitle})
                            </Text>
                        </Stack>
                    </Flex>
                );
            })}
        </Flex>
    );
};

export default StepIndicator;

import React, { useState } from "react";
import { Box, Heading, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import StepIndicator from "./StepIndicator";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const RegisterForm = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));
    const handleSaveDraft = () => alert("Draft saved!");

    const renderStepContent = () => {
        switch (step) {
            case 1: return <Step1 />;
            case 2: return <Step2 />;
            case 3: return <Step3 />;
            case 4: return <Step4 />;
            default: return null;
        }
    };

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box bg="gray.50" p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading
                size="lg"
                mb={6}
                textAlign="center"
                color="purple.600"
            >
                টুর অপারেটরের নিবন্ধনের জন্য আবেদন
                <Box as="span" display="block" fontSize="md" color="gray.600" mt={2}>
                    [Tour Operators Registration Application]
                </Box>
            </Heading>

            <StepIndicator currentStep={step} />

            <Box mt={4}>
                {renderStepContent()}
            </Box>

            <Flex
                mt={8}
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
                align={{ base: "stretch", sm: "center" }}
                gap={4}
                flexWrap="wrap"
            >
                <Button
                    variant="outline"
                    colorScheme="purple"
                    onClick={handleSaveDraft}
                    w={{ base: "100%", sm: "auto" }}
                >
                    খসড়া করুন (Save as Draft)
                </Button>

                <Flex gap={3} w={{ base: "100%", sm: "auto" }} justify={{ base: "space-between", sm: "flex-end" }}>
                    <Button
                        onClick={handlePrev}
                        isDisabled={step === 1}
                        variant="outline"
                        colorScheme="purple"
                        w={{ base: "48%", sm: "auto" }}
                    >
                        পূর্ববর্তী (Previous)
                    </Button>

                    {step < 4 ? (
                        <Button
                            colorScheme="purple"
                            onClick={handleNext}
                            w={{ base: "48%", sm: "auto" }}
                        >
                            পরবর্তী (Next)
                        </Button>
                    ) : (
                        <Button
                            colorScheme="purple"
                            w={{ base: "48%", sm: "auto" }}
                        >
                            সেভ করুন (Save)
                        </Button>
                    )}
                </Flex>
            </Flex>
        </Box>
    );
};

export default RegisterForm;

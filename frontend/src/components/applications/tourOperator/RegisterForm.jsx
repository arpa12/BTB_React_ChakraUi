import React, { useState } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
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

    return (
        <Box bg="gray.50" p={6}>
            <Heading size="md" mb={6} textAlign="center">
                টুর অপারেটরের নিবন্ধনের জন্য আবেদন [Tour Operators Registration Application]
            </Heading>

            <StepIndicator currentStep={step} />
            {renderStepContent()}

            <Box mt={6} display="flex" justifyContent="space-between" flexWrap="wrap" gap={4}>
                <Button variant="outline" colorScheme="gray" onClick={handleSaveDraft}>
                    খসড়া করুন (Save as Draft)
                </Button>
                <Box display="flex" gap={3}>
                    <Button onClick={handlePrev} isDisabled={step === 1} variant="outline">
                        পূর্ববর্তী (Previous)
                    </Button>
                    {step < 4 ? (
                        <Button colorScheme="blue" onClick={handleNext}>পরবর্তী (Next)</Button>
                    ) : (
                        <Button colorScheme="green">জমা দিন (Submit)</Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterForm;

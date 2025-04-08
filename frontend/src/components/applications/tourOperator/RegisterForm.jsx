import React, { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Button,
    Flex,
    useBreakpointValue,
    useToast,
} from "@chakra-ui/react";
import StepIndicator from "./StepIndicator";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

// Utility function to save drafts to localStorage
const saveDraft = (step, formData) => {
    localStorage.setItem("draft", JSON.stringify({ step, formData }));
};

// Utility function to get saved drafts from localStorage
const getDraft = () => {
    const draft = localStorage.getItem("draft");
    return draft ? JSON.parse(draft) : null;
};

// Utility function to clear saved drafts
const clearDraft = () => {
    localStorage.removeItem("draft");
};

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        step1: {
            applicant: {},
            organization: {},
            business_address: {},
        },
        step2: [],
        step3: {},
        step4: {},
    });

    const toast = useToast();
    const isMobile = useBreakpointValue({ base: true, md: false });

    // Load draft from localStorage if available
    useEffect(() => {
        const draft = getDraft();
        if (draft) {
            setStep(draft.step);
            setFormData(draft.formData);
        }
    }, []);

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSaveDraft = () => {
        saveDraft(step, formData);
        toast({
            title: "Draft Saved",
            description: "Your progress has been saved as a draft.",
            status: "info",
            duration: 3000,
            isClosable: true,
        });
    };

    const handleStepSubmit = () => {
        toast({
            title: "Step Complete",
            description: `You have completed step ${step}.`,
            status: "success",
            duration: 2000,
            isClosable: true,
        });

        if (step < 4) {
            handleNext();
        } else {
            toast({
                title: "Form Complete",
                description: "All steps have been filled. You may now save or export the data.",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return <Step1 formData={formData} setFormData={setFormData} />;
            case 2:
                return <Step2 formData={formData} setFormData={setFormData} />;
            case 3:
                return <Step3 formData={formData} setFormData={setFormData} />;
            case 4:
                return <Step4 formData={formData} setFormData={setFormData} />;
            default:
                return null;
        }
    };

    return (
        <Box bg="gray.50" p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading size="lg" mb={6} textAlign="center" color="purple.600">
                টুর অপারেটরের নিবন্ধনের জন্য আবেদন
                <Box as="span" display="block" fontSize="md" color="gray.600" mt={2}>
                    [Tour Operators Registration Application]
                </Box>
            </Heading>

            <StepIndicator currentStep={step} />

            <Box mt={4}>{renderStepContent()}</Box>

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

                <Flex
                    gap={3}
                    w={{ base: "100%", sm: "auto" }}
                    justify={{ base: "space-between", sm: "flex-end" }}
                >
                    <Button
                        onClick={handlePrev}
                        isDisabled={step === 1}
                        variant="outline"
                        colorScheme="purple"
                        w={{ base: "48%", sm: "auto" }}
                    >
                        পূর্ববর্তী (Previous)
                    </Button>

                    <Button
                        colorScheme="purple"
                        onClick={handleStepSubmit}
                        w={{ base: "48%", sm: "auto" }}
                    >
                        {step < 4 ? "পরবর্তী (Next)" : "সেভ করুন (Save)"}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default RegisterForm;

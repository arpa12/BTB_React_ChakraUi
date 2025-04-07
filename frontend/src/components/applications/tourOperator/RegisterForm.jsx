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
import Step3, { documentList } from "./steps/Step3";
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

    const handleStepSubmit = async () => {
        const token = localStorage.getItem("authToken"); // Get the token from localStorage

        if (!token) {
            toast({
                title: "Error",
                description: "You are not authenticated. Please log in.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        try {
            // This is the correct endpoint for step 1, step 2, etc.
            const endpoint = `/api/tour-operator/step${step}`;

            // Send the request to the backend with the token in the headers
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,  // Send the token here
                },
                body: JSON.stringify(formData[`step${step}`]), // Send the current step's data
            });

            if (!response.ok) {
                const errorText = await response.text();  // Read the response as text
                throw new Error(`Error: ${errorText}`);
            }

            const result = await response.json(); // Parse the response as JSON

            toast({
                title: "Success",
                description: `Step ${step} saved successfully.`,
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            if (step < 4) {
                handleNext();
            }
        } catch (error) {
            toast({
                title: "Error",
                description: error.message || "Submission failed.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleSubmitAll = async () => {
        const token = localStorage.getItem("authToken");

        try {
            const payload = { ...formData.step1, ...formData.step2, ...formData.step3, ...formData.step4 };
            const response = await fetch("/api/tour-operator/submit-all", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message);

            toast({
                title: "Success",
                description: "All steps submitted successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            clearDraft();
        } catch (error) {
            toast({
                title: "Error",
                description: error.message || "Error submitting all steps.",
                status: "error",
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

    const isMobile = useBreakpointValue({ base: true, md: false });

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

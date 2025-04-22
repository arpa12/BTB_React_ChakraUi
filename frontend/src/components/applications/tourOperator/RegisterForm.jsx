import React, { useState } from 'react';
import { Box, Button, Flex, Text, useToast, Heading } from '@chakra-ui/react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import StepIndicator from '../tourOperator/StepIndicator';

const initialForm = {
    // Step 1
    applicant_name_bn: '',
    applicant_name_en: '',
    applicant_father_name: '',
    applicant_mother_name: '',
    applicant_gender: '',
    applicant_designation: '',
    applicant_mobile: '',
    applicant_phone: '',
    applicant_email: '',

    // Step 2
    emp_name: '',
    emp_address: '',
    emp_gender: '',
    emp_designation: '',
    emp_education: '',
    emp_appointment_date: '',
    emp_experience: '',
    emp_passport: '',

    // Step 3 (files)
    file_1: null,
    file_2: null,
    file_3: null,

    // Step 4
    method: '',
    transaction_id: '',
    amount: '',
};

const steps = ['Applicant Info', 'Employee Info', 'Document Upload', 'Payment'];

const RegisterForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState(initialForm);
    const toast = useToast();
    const navigate = useNavigate();  // Initialize useNavigate hook

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = async (isDraft = false) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast({
                    title: 'Authentication Error',
                    description: 'Please log in first.',
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                });
                return;
            }

            // Prepare the FormData object
            const data = new FormData();
            for (const key in formData) {
                if (formData[key] !== null && formData[key] !== '') {
                    data.append(key, formData[key]);
                }
            }

            data.append('status', isDraft ? 'draft' : 'submitted');
            if (formData.id) {
                data.append('id', formData.id); // for updating draft
            }

            // Make the API request
            const response = await axios.post(
                'http://127.0.0.1:8000/api/tour-operator/save',
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            toast({
                title: 'Success',
                description: response.data.message,
                status: 'success',
                duration: 4000,
                isClosable: true,
            });

            // Redirect after saving the draft or submitting
            navigate('/dashboard/tour-operator/applications'); // Redirect to the application list page
        } catch (error) {
            const message = error.response?.data?.message || 'Something went wrong';
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        }
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return <Step1 formData={formData} handleChange={handleChange} />;
            case 1:
                return <Step2 formData={formData} handleChange={handleChange} />;
            case 2:
                return <Step3 formData={formData} handleChange={handleChange} />;
            case 3:
                return <Step4 formData={formData} handleChange={handleChange} />;
            default:
                return null;
        }
    };

    return (
        <Box >
            <StepIndicator currentStep={step + 1} />
            <Heading fontSize="2xl" mt={6} mb={4} textAlign="center">Step {step + 1}: {steps[step]}</Heading>

            {renderStep()}

            <Flex justify="space-between" mt={6}>
                <Button
                    variant="outline"
                    colorScheme="yellow"
                    onClick={() => handleSubmit(true)}  // Save as Draft
                >
                    Save as Draft
                </Button>
                {step > 0 && <Button onClick={prevStep}>Back</Button>}
                {step < steps.length - 1 ? (
                    <Button colorScheme="teal" onClick={nextStep}>Next</Button>
                ) : (
                    <Button colorScheme="green" onClick={() => handleSubmit(false)}>Submit</Button>
                )}
            </Flex>
        </Box>
    );
};

export default RegisterForm;

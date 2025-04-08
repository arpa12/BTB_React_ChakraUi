import React, { useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Select,
    IconButton,
    useColorModeValue,
    Container,
    Stack,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

// Styled Components
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

const ModernInput = (props) => (
    <Input
        bg="white"
        _focus={{ bg: "white", borderColor: "blue.300" }}
        _hover={{ bg: "gray.100" }}
        {...props}
    />
);

const ModernSelect = (props) => (
    <Select
        bg="white"
        _focus={{ bg: "white", borderColor: "blue.300" }}
        _hover={{ bg: "gray.100" }}
        {...props}
    />
);

const Step2 = ({ formData, setFormData }) => {
    // If step2 is empty, start with one employee row
    const employees = formData.step2?.length > 0
        ? formData.step2
        : [{
            name: "",
            address: "",
            nationality: "",
            designation: "",
            education: "",
            appointmentDate: "",
            experience: "",
            nid: "",
            passport: "",
        }];

    // Initialize with one row if not present
    useEffect(() => {
        if (!formData.step2 || formData.step2.length === 0) {
            setFormData((prev) => ({
                ...prev,
                step2: employees,
            }));
        }
    }, []);

    const handleInputChange = (index, field, value) => {
        const updated = [...employees];
        updated[index] = {
            ...updated[index],
            [field]: value,
        };
        setFormData((prev) => ({
            ...prev,
            step2: updated,
        }));
    };

    const handleAddRow = () => {
        const updated = [
            ...employees,
            {
                name: "",
                address: "",
                nationality: "",
                designation: "",
                education: "",
                appointmentDate: "",
                experience: "",
                nid: "",
                passport: "",
            },
        ];
        setFormData((prev) => ({
            ...prev,
            step2: updated,
        }));
    };

    const handleRemoveRow = (index) => {
        if (employees.length <= 1) return;
        const updated = [...employees];
        updated.splice(index, 1);
        setFormData((prev) => ({
            ...prev,
            step2: updated,
        }));
    };

    return (
        <Container maxW="6xl" py={10}>
            <Section
                title="১০. কর্মকর্তা-কর্মচারীদের বিবরণ"
                subtitle="Note: If the nationality is Bangladeshi, fill in the NID field. Otherwise, fill in the Passport field."
            >
                {employees.map((emp, index) => (
                    <Box
                        key={index}
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="md"
                        p={4}
                        mb={6}
                        bg="gray.50"
                    >
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                            <FormControl>
                                <FormLabel>নাম (Name)</FormLabel>
                                <ModernInput
                                    value={emp.name}
                                    onChange={(e) =>
                                        handleInputChange(index, "name", e.target.value)
                                    }
                                    placeholder="নাম লিখুন"
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>ঠিকানা (Address)</FormLabel>
                                <ModernInput
                                    value={emp.address}
                                    onChange={(e) =>
                                        handleInputChange(index, "address", e.target.value)
                                    }
                                    placeholder="ঠিকানা লিখুন"
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>জাতীয়তা (Nationality)</FormLabel>
                                <ModernSelect
                                    placeholder="নির্বাচন করুন"
                                    value={emp.nationality}
                                    onChange={(e) =>
                                        handleInputChange(index, "nationality", e.target.value)
                                    }
                                >
                                    <option value="Bangladeshi">Bangladeshi</option>
                                    <option value="Other">Other</option>
                                </ModernSelect>
                            </FormControl>

                            <FormControl>
                                <FormLabel>পদমর্যাদা (Designation)</FormLabel>
                                <ModernInput
                                    value={emp.designation}
                                    onChange={(e) =>
                                        handleInputChange(index, "designation", e.target.value)
                                    }
                                    placeholder="পদমর্যাদা লিখুন"
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>শিক্ষাগত যোগ্যতা (Education)</FormLabel>
                                <ModernInput
                                    value={emp.education}
                                    onChange={(e) =>
                                        handleInputChange(index, "education", e.target.value)
                                    }
                                    placeholder="শিক্ষাগত যোগ্যতা লিখুন"
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>নিয়োগের তারিখ (Appointment Date)</FormLabel>
                                <ModernInput
                                    type="date"
                                    value={emp.appointmentDate}
                                    onChange={(e) =>
                                        handleInputChange(index, "appointmentDate", e.target.value)
                                    }
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>অভিজ্ঞতা (Experience)</FormLabel>
                                <ModernInput
                                    value={emp.experience}
                                    onChange={(e) =>
                                        handleInputChange(index, "experience", e.target.value)
                                    }
                                    placeholder="অভিজ্ঞতার বিবরণ দিন"
                                />
                            </FormControl>

                            {emp.nationality === "Bangladeshi" ? (
                                <FormControl>
                                    <FormLabel>জাতীয় পরিচয়পত্র (NID)</FormLabel>
                                    <ModernInput
                                        value={emp.nid}
                                        onChange={(e) =>
                                            handleInputChange(index, "nid", e.target.value)
                                        }
                                        placeholder="NID নম্বর"
                                    />
                                </FormControl>
                            ) : (
                                <FormControl>
                                    <FormLabel>পাসপোর্ট (Passport)</FormLabel>
                                    <ModernInput
                                        value={emp.passport}
                                        onChange={(e) =>
                                            handleInputChange(index, "passport", e.target.value)
                                        }
                                        placeholder="পাসপোর্ট নম্বর"
                                    />
                                </FormControl>
                            )}
                        </SimpleGrid>

                        <Stack mt={4} direction="row" justify="flex-end" spacing={3}>
                            {index === employees.length - 1 && (
                                <IconButton
                                    icon={<AddIcon />}
                                    onClick={handleAddRow}
                                    aria-label="Add Employee"
                                    colorScheme="blue"
                                    variant="outline"
                                />
                            )}
                            {employees.length > 1 && (
                                <IconButton
                                    icon={<DeleteIcon />}
                                    onClick={() => handleRemoveRow(index)}
                                    aria-label="Remove Employee"
                                    colorScheme="red"
                                    variant="ghost"
                                />
                            )}
                        </Stack>
                    </Box>
                ))}
            </Section>
        </Container>
    );
};

export default Step2;

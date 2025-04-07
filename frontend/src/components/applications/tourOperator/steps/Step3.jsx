import React from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Input,
    Text,
    Link,
    VStack,
    useBreakpointValue,
    chakra,
} from "@chakra-ui/react";

// This should also be shared with RegisterForm to match labels
export const documentList = [
    {
        sl: 1,
        label:
            "বাংলাদেশ দূতাবাস কর্তৃক যাচাইকৃত তথ্য ও পাসপোর্ট কপি (Verified by Bangladesh Embassy and passport copy)",
    },
    {
        sl: 2,
        label:
            "বাংলাদেশ বিনিয়োগ উন্নয়ন কর্তৃপক্ষ কর্তৃক অনুমোদনপত্র (Approval from BIDA)",
    },
    {
        sl: 3,
        label: "জাতীয় পরিচয়পত্র (NID) ও সত্যায়িত অনুলিপি (NID & attested copy)",
    },
];

const Step3 = ({ formData, setFormData }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const handleFileChange = (e, sl) => {
        const file = e.target.files[0];
        if (!file) return;

        const newFiles = {
            ...formData,
            [sl]: file,
        };

        setFormData(newFiles);
    };

    return (
        <Box
            bg="white"
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            boxShadow="md"
            border="1px solid"
            borderColor="gray.200"
        >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
                প্রয়োজনীয় কাগজপত্রের সংযুক্তি [Document Attachment]
            </Text>

            <Text fontSize="sm" mb={6} color="gray.600">
                Please upload the following documents. Accepted formats: PDF, JPG, PNG. Max size: 2MB.
            </Text>

            <Box overflowX="auto">
                <Table size="sm" variant="striped" minWidth="800px">
                    <Thead bg="gray.100">
                        <Tr>
                            <Th textAlign="center">ক্রম (SL)</Th>
                            <Th>প্রয়োজনীয় কাগজপত্র (Document Name)</Th>
                            <Th>
                                ফাইল আপলোড করুন (Upload)
                                <Text fontSize="xs" color="red.500">
                                    Max 2MB
                                </Text>
                            </Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {documentList.map((doc) => (
                            <Tr key={doc.sl}>
                                <Td textAlign="center" fontWeight="semibold">
                                    {doc.sl}
                                </Td>

                                <Td>
                                    <chakra.p fontSize="sm" whiteSpace="normal">
                                        {doc.label}
                                    </chakra.p>
                                </Td>

                                <Td>
                                    <VStack align="start" spacing={2}>
                                        <Input
                                            type="file"
                                            size="sm"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            onChange={(e) =>
                                                handleFileChange(e, doc.sl)
                                            }
                                            bg="gray.50"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _focus={{ borderColor: "blue.400" }}
                                            p="5px"
                                        />
                                        {formData[doc.sl] && (
                                            <Text fontSize="sm" color="green.600">
                                                Uploaded: {formData[doc.sl].name}
                                            </Text>
                                        )}
                                        <Link
                                            href="https://www.ilovepdf.com/jpg_to_pdf"
                                            fontSize="sm"
                                            color="blue.500"
                                            isExternal
                                        >
                                            Convert image to PDF
                                        </Link>
                                    </VStack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default Step3;

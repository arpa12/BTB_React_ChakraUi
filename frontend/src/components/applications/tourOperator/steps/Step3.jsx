import React from 'react';
import { Input, Stack, FormControl, FormLabel, Box } from '@chakra-ui/react';

const Step3 = ({ formData, handleChange }) => (
    <Box p={6} maxW="800px" mx="auto" borderRadius="lg" boxShadow="md" bg="white">
        <Stack spacing={5}>
            <FormControl>
                <FormLabel htmlFor="file_1" fontWeight="bold">Upload File 1</FormLabel>
                <Input
                    name="file_1"
                    type="file"
                    id="file_1"
                    onChange={handleChange}
                    _focus={{ borderColor: 'teal.500' }}
                    borderColor="gray.300"
                    p={2}
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="file_2" fontWeight="bold">Upload File 2</FormLabel>
                <Input
                    name="file_2"
                    type="file"
                    id="file_2"
                    onChange={handleChange}
                    _focus={{ borderColor: 'teal.500' }}
                    borderColor="gray.300"
                    p={2}
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="file_3" fontWeight="bold">Upload File 3</FormLabel>
                <Input
                    name="file_3"
                    type="file"
                    id="file_3"
                    onChange={handleChange}
                    _focus={{ borderColor: 'teal.500' }}
                    borderColor="gray.300"
                    p={2}
                />
            </FormControl>
        </Stack>
    </Box>
);

export default Step3;

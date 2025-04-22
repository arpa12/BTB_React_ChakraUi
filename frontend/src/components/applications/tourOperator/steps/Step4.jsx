import React from 'react';
import { Input, Select, Stack, FormControl, FormLabel, Box } from '@chakra-ui/react';

const Step4 = ({ formData, handleChange }) => (
    <Box p={6} maxW="800px" mx="auto" borderRadius="lg" boxShadow="md" bg="white">
        <Stack spacing={5}>
            {/* Payment Method */}
            <FormControl>
                <FormLabel htmlFor="method" fontWeight="bold">Payment Method</FormLabel>
                <Select
                    name="method"
                    id="method"
                    value={formData.method}
                    onChange={handleChange}
                    placeholder="Select Payment Method"
                    _focus={{ borderColor: 'teal.500' }}
                    borderColor="gray.300"
                    p={3}
                >
                    <option value="bkash">bKash</option>
                    <option value="bank">Bank</option>
                </Select>
            </FormControl>

            {/* Transaction ID */}
            <FormControl>
                <FormLabel htmlFor="transaction_id" fontWeight="bold">Transaction ID</FormLabel>
                <Input
                    name="transaction_id"
                    id="transaction_id"
                    placeholder="Enter Transaction ID"
                    value={formData.transaction_id}
                    onChange={handleChange}
                    _focus={{ borderColor: 'teal.500' }}
                    borderColor="gray.300"
                    p={3}
                />
            </FormControl>

            {/* Amount */}
            <FormControl>
                <FormLabel htmlFor="amount" fontWeight="bold">Amount</FormLabel>
                <Input
                    name="amount"
                    id="amount"
                    type="number"
                    placeholder="Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    _focus={{ borderColor: 'teal.500' }}
                    borderColor="gray.300"
                    p={3}
                />
            </FormControl>
        </Stack>
    </Box>
);

export default Step4;

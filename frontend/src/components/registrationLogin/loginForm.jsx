import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Heading, Text, VStack, useBreakpointValue, FormErrorMessage } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    console.log("Login form submitted", formData);
    // Add your API request logic for login here
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={{ base: "50px", md: "100px" }}
      p={{ base: "4", md: "6" }}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      width="full"
      bg="white"
    >
      <Heading mb="6" fontSize="3xl" textAlign="center" color="blue.600">Log In</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <FormControl isRequired isInvalid={error}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              focusBorderColor="blue.500"
            />
          </FormControl>

          <FormControl isRequired isInvalid={error}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              focusBorderColor="blue.500"
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            size="lg"
            mt="4"
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
          >
            Log In
          </Button>
        </VStack>
      </form>

      <Text mt="3" textAlign="center" fontSize="sm">
        Don't have an account?{" "}
        <Button variant="link" colorScheme="blue" onClick={() => navigate("/register")}>
          Register
        </Button>
      </Text>

      <Button mt="4" variant="link" onClick={() => navigate("/")} colorScheme="gray" size="sm" width="full">
        Back to Home
      </Button>
    </Box>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Heading, Text, VStack, useBreakpointValue, FormErrorMessage } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");
    console.log("Form submitted", formData);
    // Add your API request logic for registration here
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
      <Heading mb="6" fontSize="3xl" textAlign="center" color="blue.600">Create an Account</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <FormControl isRequired isInvalid={error}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              focusBorderColor="blue.500"
            />
          </FormControl>

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
            Register
          </Button>
        </VStack>
      </form>

      <Text mt="3" textAlign="center" fontSize="sm">
        Already have an account?{" "}
        <Button variant="link" colorScheme="blue" onClick={() => navigate("/login")}>
          Log In
        </Button>
      </Text>

      <Button mt="4" variant="link" onClick={() => navigate("/")} colorScheme="gray" size="sm" width="full">
        Back to Home
      </Button>
    </Box>
  );
};

export default RegistrationForm;

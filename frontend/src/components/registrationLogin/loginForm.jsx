import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, Heading, Text, VStack, FormErrorMessage, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      console.log("Response:", response.data); // Log the response to verify success

      if (response.data.token) {
        // Save the token to localStorage (or any secure storage)
        localStorage.setItem("token", response.data.token);
        setSuccess("Login successful! Redirecting to dashboard...");

        // Redirect to Dashboard after successful login
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      console.error("Error:", err.response); // Log error for debugging
      if (err.response && err.response.data) {
        setError(err.response.data.error || "Login failed. Please check your credentials.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
    setLoading(false);
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
            <FormControl isRequired>
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

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  focusBorderColor="blue.500"
              />
            </FormControl>

            <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="lg"
                mt="4"
                isLoading={loading}
                loadingText="Logging in..."
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "blue.700" }}
            >
              Log In
            </Button>
          </VStack>
        </form>

        {error && (
            <Alert status="error" mt="4">
              <AlertIcon />
              {error}
            </Alert>
        )}

        {success && (
            <Alert status="success" mt="4">
              <AlertIcon />
              {success}
            </Alert>
        )}

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

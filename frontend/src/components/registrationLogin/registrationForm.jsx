import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          }
      );

      if (response.data) {
        setSuccess("Registration successful! Redirecting to login...");
        setFormData({ name: "", email: "", password: "" });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        const serverError = err.response.data.errors;

        if (serverError) {
          const firstError = Object.values(serverError)[0][0]; // Get the first error message
          setError(firstError || "Registration failed.");
        } else {
          setError(err.response.data.message || "Registration failed.");
        }
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
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
        <Heading mb="6" fontSize="3xl" textAlign="center" color="blue.600">
          Create an Account
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <FormControl isRequired>
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
                loadingText="Registering..."
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "blue.700" }}
            >
              Register
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
          Already have an account?{" "}
          <Button variant="link" colorScheme="blue" onClick={() => navigate("/login")}>
            Log In
          </Button>
        </Text>

        <Button
            mt="4"
            variant="link"
            onClick={() => navigate("/")}
            colorScheme="gray"
            size="sm"
            width="full"
        >
          Back to Home
        </Button>
      </Box>
  );
};

export default RegistrationForm;

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
      const response = await axios.post("http://127.0.0.1:8000/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true, // Send credentials along with the request (cookies, headers, etc.)
      });

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
          const firstError = Object.values(serverError)[0][0];
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
          mx="auto"
          mt={{ base: "150px", md: "150px", lg: "100px" }}
          p={{ base: 4, sm: 6, md: 8 }}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
          width={{ base: "90%", sm: "400px", md: "450px" }}
      >
        <Heading
            mb={6}
            fontSize={{ base: "2xl", md: "3xl" }}
            textAlign="center"
            color="blue.600"
        >
          Create an Account
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", md: "md" }}>Name</FormLabel>
              <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  focusBorderColor="blue.500"
                  size="md"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
              <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  focusBorderColor="blue.500"
                  size="md"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", md: "md" }}>Password</FormLabel>
              <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  focusBorderColor="blue.500"
                  size="md"
              />
            </FormControl>

            <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="md"
                isLoading={loading}
                loadingText="Registering..."
            >
              Register
            </Button>
          </VStack>
        </form>

        {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              {error}
            </Alert>
        )}

        {success && (
            <Alert status="success" mt={4}>
              <AlertIcon />
              {success}
            </Alert>
        )}

        <Text mt={4} fontSize="sm" textAlign="center">
          Already have an account?{" "}
          <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              onClick={() => navigate("/login")}
          >
            Log In
          </Button>
        </Text>

        <Button
            mt={3}
            variant="link"
            colorScheme="gray"
            size="sm"
            width="full"
            onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
  );
};

export default RegistrationForm;

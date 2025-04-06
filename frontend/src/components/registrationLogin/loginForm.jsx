import React, { useState } from "react";
import {
  Box, Input, Button, FormControl, FormLabel, Heading,
  Text, VStack, Alert, AlertIcon
} from "@chakra-ui/react";
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
          Accept: "application/json",
        },
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError(
          err.response?.data?.error || "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
      <Box
          mx="auto"
          mt={{ base: "150px", md: "150px", lg: "150px" }}
          p={{ base: 4, md: 6 }}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          bg="white"
          width={{ base: "90%", sm: "400px", md: "450px" }}
      >
        <Heading mb={5} fontSize={{ base: "xl", md: "2xl" }} textAlign="center" color="blue.600">
          Log In
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
              <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  size="md"
                  focusBorderColor="blue.500"
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
                  size="md"
                  focusBorderColor="blue.500"
              />
            </FormControl>

            <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="md"
                isLoading={loading}
                loadingText="Logging in..."
            >
              Log In
            </Button>
          </VStack>
        </form>

        {error && (
            <Alert status="error" mt={3}>
              <AlertIcon />
              {error}
            </Alert>
        )}

        {success && (
            <Alert status="success" mt={3}>
              <AlertIcon />
              {success}
            </Alert>
        )}

        <Text mt={4} fontSize="sm" textAlign="center">
          Don't have an account?{" "}
          <Button variant="link" colorScheme="blue" onClick={() => navigate("/register")}>
            Register
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

export default LoginForm;

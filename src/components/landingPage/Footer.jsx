import React from "react";
import { Box, Grid, GridItem, Image, Text, Link } from "@chakra-ui/react";
import btbLogo from "../../assets/images/btb-logo.png";
import { useNavigate } from "react-router-dom";
import { logoStyles } from "../../assets/styles/headerStyles";
import { Divider } from "@chakra-ui/react";

export default function Footer() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Navigate to home
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <Box
      py={6}
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)" // Adds 3D shadow
      display="flex"
      justifyContent="center" // Center the footer content horizontally
      alignItems="center" // Center vertically if needed
      width="100%" // Full width for the container
    >
      <Box width="100%" maxWidth="1200px">
        {" "}
        {/* Restrict the width */}
        <Grid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }}
          gap={6}
          px={{ base: "20px", sm: "50px", md: "100px" }}
        >
          <GridItem>
            <Box onClick={handleHomeClick} style={{ cursor: "pointer" }}>
              <Image
                src={btbLogo}
                alt="Bangladesh Tourism Board"
                sx={logoStyles}
                mb={2}
              />
            </Box>
            <Text mt={2}>
              Our operators play a crucial role in the travel and tourism
              industry.
            </Text>
          </GridItem>

          <GridItem>
            <Text fontWeight="bold" mb={2}>
              Services
            </Text>
            <Link href="#" display="block" mb={1}>
              Tour Operator
            </Link>
            <Link href="#" display="block" mb={1}>
              Tour Guide
            </Link>
            <Link href="#" display="block" mb={1}>
              Best Plan
            </Link>
          </GridItem>

          <GridItem>
            <Text fontWeight="bold" mb={2}>
              Important Links
            </Text>
            <Link href="#" display="block" mb={1}>
              Bangladesh Tourism Board
            </Link>
            <Link href="#" display="block" mb={1}>
              Ministry of Civil Aviation and Tourism
            </Link>
            <Link href="#" display="block" mb={1}>
              Tourist Police, Bangladesh
            </Link>
            <Link href="#" display="block" mb={1}>
              Bangladesh Tourism Corporation
            </Link>
          </GridItem>

          <GridItem>
            <Text fontWeight="bold" mb={2}>
              Others
            </Text>
            <Link href="#" display="block" mb={1}>
              TVC/Documentary
            </Link>
            <Link href="#" display="block" mb={1}>
              FAQ
            </Link>
            <Link href="#" display="block" mb={1}>
              Privacy and Policy
            </Link>
            <Link href="#" display="block" mb={1}>
              About Us
            </Link>
          </GridItem>
        </Grid>
        <Divider />
        <Text textAlign="center" p="20px" fontSize="17px">
          Bangladesh Tourism Board
        </Text>
      </Box>
    </Box>
  );
}

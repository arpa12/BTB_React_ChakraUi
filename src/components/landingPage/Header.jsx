import React, { useState } from "react";
import { Box, Flex, Button, Image, Text, Icon, IconButton, Link } from "@chakra-ui/react";
import { FaHome, FaConciergeBell, FaPhone } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // For navigation
import registrationForm from "../registrationLogin/registrationForm";
import btbLogo from "../../assets/images/btb-logo.png";
import {
  headerStyles,
  logoStyles,
  navContainerStyles,
  navMenuStyles,
  navItemStyles,
  iconSpacing,
  buttonStyles,
  iconButtonStyles,
  mobileMenuStyles
} from "../../assets/styles/landingPage/headerStyles";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation to home
  const handleHomeClick = () => {
    navigate("/"); // Navigate to home
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  // Handle scroll to services section
  const handleServicesClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

   // Function to navigate to the Registration Form
   const handleRegisterClick = () => {
    navigate("/register"); // Navigate to Registration Page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box as="header" sx={headerStyles}>
    <Box onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
      <Image src={btbLogo} alt="Bangladesh Tourism Board" sx={logoStyles} />
    </Box>

       {/* Desktop Navigation */}
       <Flex sx={navContainerStyles} display={{ base: "none", md: "flex" }}>
        <Flex as="nav" sx={navMenuStyles}>
          <Text sx={navItemStyles} onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <Icon as={FaHome} sx={iconSpacing} />
            Home
          </Text>

          {/* Update the Service Link to trigger scrolling */}
          <Text sx={navItemStyles} onClick={handleServicesClick} style={{ cursor: "pointer" }}>
            <Icon as={FaConciergeBell} sx={iconSpacing} />
            Service
          </Text>


          {/* Link to Contact page */}
         <Link href="/contact" sx={navItemStyles}>
            <Icon as={FaPhone} sx={iconSpacing} />
            Contact
          </Link>
        </Flex>

        {/* Updated Registration/Login Button */}
        <Button sx={buttonStyles} onClick={handleRegisterClick}>Registration/Login</Button>
      </Flex>

      <Box sx={{ ...mobileMenuStyles, opacity: isMenuOpen ? 1 : 0, maxHeight: isMenuOpen ? "500px" : "0px" }}>
        <Flex direction="column" gap="1rem">
          <Text sx={navItemStyles} onClick={() => { navigate("/"); setIsMenuOpen(false); }}>
            <Icon as={FaHome} sx={iconSpacing} />
            Home
          </Text>

          <Text sx={navItemStyles} onClick={() => { handleServicesClick(); setIsMenuOpen(false); }} style={{ cursor: "pointer" }}>
            <Icon as={FaConciergeBell} sx={iconSpacing} />
            Service
          </Text>

          <Link href="/contact" sx={navItemStyles} onClick={() => setIsMenuOpen(false)}>
            <Icon as={FaPhone} sx={iconSpacing} />
            Contact
          </Link>

          {/* Updated Mobile Registration/Login Button */}
          <Button sx={buttonStyles} onClick={() => { handleRegisterClick(); setIsMenuOpen(false); }}>
            Registration/Login
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
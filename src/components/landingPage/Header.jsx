import React, { useState } from "react";
import { Box, Flex, Button, Image, Text, Icon, IconButton, Link } from "@chakra-ui/react";
import { FaHome, FaConciergeBell, FaPhone } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // For navigation
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
} from "../../assets/styles/headerStyles";

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

  return (
    <Box as="header" sx={headerStyles}>
      {/* Left Section: Logo */}
      <Box onClick={handleHomeClick} style={{ cursor: "pointer" }}>
        <Image src={btbLogo} alt="Bangladesh Tourism Board" sx={logoStyles} />
      </Box>

      {/* Desktop Navigation */}
      <Flex sx={navContainerStyles} display={{ base: "none", md: "flex" }}>
        <Flex as="nav" sx={navMenuStyles}>
          <Text sx={navItemStyles} onClick={handleHomeClick} style={{ cursor: "pointer" }}>
            <Icon as={FaHome} sx={iconSpacing} />
            Home
          </Text>

          <Link href="/services" sx={navItemStyles}>
            <Icon as={FaConciergeBell} sx={iconSpacing} />
            Service
          </Link>

          {/* Link to Contact page */}
          <Link href="/contact" sx={navItemStyles}>
            <Icon as={FaPhone} sx={iconSpacing} />
            Contact
          </Link>
        </Flex>

        <Button sx={buttonStyles}>Registration/Login</Button>
      </Flex>

      {/* Mobile Hamburger Menu Button */}
      <IconButton
        aria-label="Toggle Menu"
        icon={isMenuOpen ? <FiX /> : <FiMenu />}
        sx={iconButtonStyles}
        onClick={toggleMenu}
      />

      {/* Mobile Navigation Menu */}
      <Box
        sx={{
          ...mobileMenuStyles,
          opacity: isMenuOpen ? 1 : 0,
          maxHeight: isMenuOpen ? "500px" : "0px",
        }}
      >
        <Flex direction="column" gap="1rem">
          <Text sx={navItemStyles} onClick={() => { handleHomeClick(); toggleMenu(); }}>
            <Icon as={FaHome} sx={iconSpacing} />
            Home
          </Text>

          <Link href="/services" sx={navItemStyles} onClick={toggleMenu}>
            <Icon as={FaConciergeBell} sx={iconSpacing} />
            Service
          </Link>

          {/* Link to Contact page */}
          <Link href="/contact" sx={navItemStyles} onClick={toggleMenu}>
            <Icon as={FaPhone} sx={iconSpacing} />
            Contact
          </Link>

          <Button sx={buttonStyles} onClick={toggleMenu}>Registration/Login</Button>
        </Flex>
      </Box>
    </Box>
  );
}

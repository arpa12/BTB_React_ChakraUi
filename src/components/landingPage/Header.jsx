import React, { useState } from "react";
import { 
  Box, Flex, Button, Image, Text, Icon, Link, IconButton,  
} from "@chakra-ui/react";
import { FaHome, FaConciergeBell, FaPhone } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & Close icons
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
} from "../../assets/styles/headerStyles"; // Import styles

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu state

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box as="header" sx={headerStyles}>
      {/* Left Section: Logo */}
      <Box>
        <Image src={btbLogo} alt="Bangladesh Tourism Board" sx={logoStyles} />
      </Box>

      {/* Desktop Navigation (Hidden on mobile) */}
      <Flex sx={navContainerStyles} display={{ base: "none", md: "flex" }}>
        <Flex as="nav" sx={navMenuStyles}>
          <Link href="#" sx={navItemStyles}>
            <Icon as={FaHome} sx={iconSpacing} />
            <Text>Home</Text>
          </Link>
          <Link href="#" sx={navItemStyles}>
            <Icon as={FaConciergeBell} sx={iconSpacing} />
            <Text>Service</Text>
          </Link>
          <Link href="#" sx={navItemStyles}>
            <Icon as={FaPhone} sx={iconSpacing} />
            <Text>Contact</Text>
          </Link>
        </Flex>
        {/* Registration/Login Button */}
        <Button sx={buttonStyles}>Registration/Login</Button>
      </Flex>

      {/* Mobile Hamburger Menu Button */}
      <IconButton
        aria-label="Toggle Menu"
        icon={isMenuOpen ? <FiX /> : <FiMenu />} // ✅ Toggle icon
        sx={iconButtonStyles}
        onClick={toggleMenu}
      />

      {/* Mobile Navigation Menu (Smooth Slide Down) */}
      <Box
        sx={{
          ...mobileMenuStyles,
          opacity: isMenuOpen ? 1 : 0,
          maxHeight: isMenuOpen ? "500px" : "0px",
        }}
      >
        <Flex direction="column" gap="1rem">
          <Link href="#" sx={navItemStyles} onClick={toggleMenu}>
            <Icon as={FaHome} sx={iconSpacing} />
            <Text>Home</Text>
          </Link>

          <Link href="#" sx={navItemStyles} onClick={toggleMenu}>
            <Icon as={FaConciergeBell} sx={iconSpacing} />
            <Text>Service</Text>
          </Link>

          <Link href="#" sx={navItemStyles} onClick={toggleMenu}>
            <Icon as={FaPhone} sx={iconSpacing} />
            <Text>Contact</Text>
          </Link>

          <Button sx={buttonStyles} onClick={toggleMenu}>Registration/Login</Button>
        </Flex>
      </Box>
    </Box>
  );
}

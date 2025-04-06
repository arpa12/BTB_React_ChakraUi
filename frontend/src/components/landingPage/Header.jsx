import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  Text,
  Icon,
  IconButton,
  Link,
  Collapse,
} from "@chakra-ui/react";
import { FaHome, FaConciergeBell, FaPhone } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
  navItemMobileStyles,
} from "../../assets/styles/landingPage/headerStyles";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServicesClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <Box as="header" sx={headerStyles}>
        {/* Top Bar */}
        <Flex
            justify="space-between"
            align="center"
            px={{ base: 4, md: 8 }}
            py={3}
            width="100%"
        >
          {/* Logo */}
          <Box onClick={handleHomeClick} cursor="pointer">
            <Image src={btbLogo} alt="Bangladesh Tourism Board" sx={logoStyles} />
          </Box>

          {/* Desktop Navigation */}
          <Flex
              as="nav"
              sx={navContainerStyles}
              display={{ base: "none", md: "flex" }}
          >
            <Flex sx={navMenuStyles}>
              <Text sx={navItemStyles} onClick={handleHomeClick}>
                <Icon as={FaHome} sx={iconSpacing} />
                Home
              </Text>

              <Text sx={navItemStyles} onClick={handleServicesClick}>
                <Icon as={FaConciergeBell} sx={iconSpacing} />
                Service
              </Text>

              <Link href="/contact" sx={navItemStyles}>
                <Icon as={FaPhone} sx={iconSpacing} />
                Contact
              </Link>
            </Flex>

            <Button sx={buttonStyles} onClick={handleRegisterClick}>
              Registration/Login
            </Button>
          </Flex>

          {/* Mobile Toggle Button */}
          <IconButton
              aria-label="Toggle Menu"
              icon={isMenuOpen ? <FiX /> : <FiMenu />}
              onClick={toggleMenu}
              sx={iconButtonStyles}
          />
        </Flex>

        {/* Mobile Menu Content */}
        <Collapse in={isMenuOpen} animateOpacity>
          <Box
              bg="white"
              px={4}
              py={4}
              display={{ md: "none" }}
              borderBottom="1px solid"
              borderColor="gray.200"
              boxShadow="md"
              zIndex={999}
              position="absolute"
              top="100%"
              left={0}
              width="100%"
          >
            <Flex direction="column" gap={4}>
              <Text
                  sx={navItemMobileStyles}
                  onClick={() => {
                    handleHomeClick();
                    toggleMenu();
                  }}
              >
                <Icon as={FaHome} sx={iconSpacing} />
                Home
              </Text>

              <Text
                  sx={navItemMobileStyles}
                  onClick={() => {
                    handleServicesClick();
                    toggleMenu();
                  }}
              >
                <Icon as={FaConciergeBell} sx={iconSpacing} />
                Service
              </Text>

              <Link
                  href="/contact"
                  sx={navItemMobileStyles}
                  onClick={toggleMenu}
              >
                <Icon as={FaPhone} sx={iconSpacing} />
                Contact
              </Link>

              <Button
                  sx={buttonStyles}
                  width="100%"
                  onClick={() => {
                    handleRegisterClick();
                    toggleMenu();
                  }}
              >
                Registration/Login
              </Button>
            </Flex>
          </Box>
        </Collapse>

      </Box>
  );
}

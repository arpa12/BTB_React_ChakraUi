import {
  Container,
  Box,
  Text,
  Heading,
  Flex,
  Square,
  Center,
  Divider,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { AspectRatio } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { FaArrowAltCircleRight, FaUserTie, FaMapMarkedAlt } from "react-icons/fa";
import { containerStyles, headingSectionStyles, tourOperatorStyles, tourGuideStyles } from "../../assets/styles/serviceStyles"; // Import the styles

export default function Services() {
  return (
    <Container sx={containerStyles}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={16}>
        <GridItem>
          <Box>
            <Text sx={headingSectionStyles.text}>
              We Provide_____
            </Text>
            <Heading sx={headingSectionStyles.heading}>
              Services
            </Heading>

            <AspectRatio sx={headingSectionStyles.iframe}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mNzenfB3OuY?si=0A2Gy6_51v0Lv5lp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </AspectRatio>
          </Box>
        </GridItem>

        <GridItem>
          <Box>
            {/* Tour Operator Section */}
            <Flex sx={tourOperatorStyles.flex}>
              <Icon as={FaUserTie} sx={tourOperatorStyles.icon} />
              <Heading sx={tourOperatorStyles.heading}>
                Tour Operator
              </Heading>
            </Flex>
            <Text sx={tourOperatorStyles.text}>
              Our operators play a crucial role in the travel and tourism
              industry, often including transportation, guided tours,
              activities, and even meals.
            </Text>

            <Flex sx={tourOperatorStyles.flexActions}>
              <Center flex="1" color="#ff7b37">
                <Text fontSize="sm">
                  Clicking this arrow will display the user manual, working
                  days, payment info, and required documents.
                </Text>
              </Center>
              <Square sx={tourOperatorStyles.arrow}>
                <FaArrowAltCircleRight size="24px" />
              </Square>
            </Flex>

            <Divider sx={tourOperatorStyles.divider} />

            {/* Tour Guide Section */}
            <Flex sx={tourGuideStyles.flex}>
              <Icon as={FaMapMarkedAlt} sx={tourGuideStyles.icon} />
              <Heading sx={tourGuideStyles.heading}>
                Tour Guide
              </Heading>
            </Flex>
            <Text sx={tourGuideStyles.text}>
              Guidance to individuals or groups of tourists visiting a specific
              destination, historical site, museum, city, or other points of
              interest.
            </Text>

            <Flex sx={tourGuideStyles.flexActions}>
              <Center flex="1" color="#ff7b37">
                <Text fontSize="sm">
                  Clicking this arrow will display the user manual, working
                  days, payment info, and required documents.
                </Text>
              </Center>
              <Square sx={tourGuideStyles.arrow}>
                <FaArrowAltCircleRight size="30px" />
              </Square>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

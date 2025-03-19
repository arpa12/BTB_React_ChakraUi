import React from "react";
import {
  Heading,
  Container,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaSuitcase, FaUserAlt } from "react-icons/fa"; // Import icons for Tour Operator and Tour Guide
import { noticeStyle, noticeCardStyle } from "../../assets/styles/landingPage/tOandtGListStyles";

export default function Notice() {
  return (
    <Container sx={noticeStyle}>
      {/* Section Header */}
      <Box mb={5}>
        <Heading as="h3" size="lg" color="green.500">
          APPROVED _____
        </Heading>
        <Heading size="2xl" fontWeight="bold">
          Tour Operator & Tour Guide List
        </Heading>
      </Box>

      {/* Main Section with Tour Operator & Tour Guide */}
      <Flex sx={noticeCardStyle.container}>
        <Box sx={noticeCardStyle.card}>
          <Flex sx={noticeCardStyle.innerFlex}>
            <Flex sx={noticeCardStyle.iconText}>
              <FaSuitcase size={40} color="green" />
              <Text sx={noticeCardStyle.text}>Tour Operator</Text>
            </Flex>
            <Text sx={noticeCardStyle.number}>60</Text>
          </Flex>
        </Box>

        <Box sx={noticeCardStyle.card}>
          <Flex sx={noticeCardStyle.innerFlex}>
            <Flex sx={noticeCardStyle.iconText}>
              <FaUserAlt size={50} color="green" />
              <Text sx={noticeCardStyle.text}>Tour Guide</Text>
            </Flex>
            <Text sx={noticeCardStyle.number}>40</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}

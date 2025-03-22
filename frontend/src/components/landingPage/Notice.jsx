import React from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Container,
  VStack,
  Box,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { noticeStyle, noticeCardStyle } from "../../assets/styles/landingPage/noticeStyle";
import noticeData from "../../assets/data/noticeData"; // ✅ Import Notice Data
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Notice() {
  return (
    <Container sx={noticeStyle}>
      {/* Section Header */}
      <Box mb={5}>
        <Heading as="h3" size="lg" color="green.500">
          LIST_____
        </Heading>
        <Heading size="2xl" fontWeight="bold">
          Notice
        </Heading>
      </Box>

      {/* Notice List */}
      <VStack spacing={4} align="stretch">
        {noticeData.map((notice) => (
          <Card key={notice.id} sx={noticeCardStyle}>
            <CardBody>
              {/* Notice Title */}
              <Heading size="lg" mb={2}>
                {notice.title}
              </Heading>

              {/* Notice Content */}
              <Text fontSize="xl" color="gray.600" mb={3}>
                {notice.content}
              </Text>

              {/* Footer Section: Date & Details */}
              <Flex align="center">
                {/* Date with Calendar Icon */}
                <Flex align="center" gap={2} color="gray.500" fontSize="sm">
                  <FaRegCalendarAlt />
                  <Text>{notice.date}</Text>
                </Flex>

                <Spacer /> {/* Spacer to push Details Link to the right */}

                {/* Details Link */}
                <Link href="/notice-details" fontWeight="bold" color="green.600" _hover={{ textDecoration: "underline" }}>
                  Details →
                </Link>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </Container>
  );
}

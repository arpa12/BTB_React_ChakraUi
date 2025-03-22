import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Grid,
  GridItem,
  Icon,
  Box,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6"; // Importing the location pin icon

import Waterfall from "../../assets/images/Waterfalls.jpg";
import HeritageTour from "../../assets/images/Heritage tour.jpg";
import SeaBeach from "../../assets/images/Sea Beach.jpg";
import Food from "../../assets/images/food.jpg";
import Luxury from "../../assets/images/Luxury.jpg";
import GreenTourism from "../../assets/images/green tourism.jpg";

const destinations = [
  { image: Waterfall, title: "Waterfalls", location: "Iceland" },
  { image: HeritageTour, title: "Heritage Tour", location: "Rome" },
  { image: SeaBeach, title: "Sea Beach", location: "Maldives" },
  { image: Food, title: "Food Tour", location: "Bangkok" },
  { image: Luxury, title: "Luxury Escape", location: "Dubai" },
  { image: GreenTourism, title: "Green Tourism", location: "Bali" },
];

export default function PopularDestination() {
  return (
    <Box>
      <Heading as='h3' size='md' color="green.500" textAlign="center" pt="50px">
        _______MUST VISIT_______
      </Heading>

      <Heading as='h2' size='2xl' textAlign="center" pt="10px">
        Popular Destination
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",    // 1 column on small screens
          sm: "repeat(2, 1fr)",      // 2 columns on small screens
          md: "repeat(3, 1fr)",      // 3 columns on medium screens and above
        }}
        gap={6}
        p="60px"
      >
        {destinations.map((destination, index) => (
          <GridItem key={index}>
            <Card maxW="sm" height="100%">
              <CardBody display="flex" flexDirection="column" padding="0">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  borderRadius="lg"
                  height="200px"
                  width="100%"
                  objectFit="cover"
                />
                <Stack flex="1" mt="4" spacing="2" padding="4">
                  <Heading size="md">{destination.title}</Heading>
                  <Text
                    color="gray.600"
                    fontSize="md"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon as={FaLocationDot} color="green.500" mr="2" />
                    {destination.location}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

import { Box, Container, Grid, GridItem, Link, Text, Flex, Spacer, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box bg="white" borderTop="2px solid #f1f1f1" py={10}>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(3, 1fr)" gap={8} mb={8}>
          {/* Left Column (Logo + Description) */}
          <GridItem>
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="green.600">
                Bangladesh Tourism Board
              </Text>
              <Text fontSize="sm" color="gray.500" mt={2}>
                Our operators play a crucial role in the travel and tourism industry.
              </Text>
            </Box>
          </GridItem>

          {/* Services Section */}
          <GridItem>
            <Text fontSize="lg" fontWeight="bold" color="black" mb={3}>
              Services
            </Text>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              Tour Operator
            </Link>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              Tour Guide
            </Link>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              Best Plan
            </Link>
          </GridItem>

          {/* Important Links Section */}
          <GridItem>
            <Text fontSize="lg" fontWeight="bold" color="black" mb={3}>
              Important Links
            </Text>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              Bangladesh Tourism Board
            </Link>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              Ministry of Civil Aviation and Tourism
            </Link>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              Tourist Police, Bangladesh
            </Link>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              Bangladesh Tourism Corporation
            </Link>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap={8} mt={8}>
          {/* Others Section */}
          <GridItem>
            <Text fontSize="lg" fontWeight="bold" color="black" mb={3}>
              Others
            </Text>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              TVC/Documentary
            </Link>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              FAQ
            </Link>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              Privacy and Policy
            </Link>
            <Link display="block" href="#" fontSize="sm" color="gray.700" mb={2}>
              About Us
            </Link>
          </GridItem>

          {/* Footer Bottom */}
          <GridItem>
            <Flex align="center" justify="center" direction="column">
              <Text fontSize="sm" color="gray.500">
                Bangladesh Tourism Board (BTB)
              </Text>
              <Spacer />
              <IconButton
                aria-label="Back to top"
                icon={<ChevronUpIcon />}
                variant="link"
                size="sm"
                color="green.600"
                mt={4}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

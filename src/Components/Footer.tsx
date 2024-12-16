import { Box, Flex, Text, Image, Stack, Link } from "@chakra-ui/react";
import { Container } from "react-bootstrap";
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import SJCOElogo from "../assets/SJCOElogo.png";
import CODESTACKlogo from "../assets/CODEHACKlogo.png";

const FooterComponent = () => {
  return (
    <Box as="footer"  color="white" py={8}>
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          gap={8}
          wrap="wrap"
        >
          <Box flex={{ base: "100%", md: "30%" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              About SEIS
            </Text>
            <Text fontSize="sm" lineHeight="1.6">
            SEITE is managed and maintained by NaN, a department of the Supportive
            Journeys for Communities of Opportunity and Education..{" "}
              <Link color="white" textDecoration="underline" href="#">
                System Requirements
              </Link>
            </Text>
            <Flex>
              <Image
                src={SJCOElogo}
                alt="SJCOE Logo"
                boxSize="180px"
                objectFit="contain"
                mb="0"
              />
              <Image
                src={CODESTACKlogo}
                alt="CodeHack Logo"
                boxSize="180px"
                objectFit="contain"
                mb="0" 
              />
            </Flex>
          </Box>

          <Box flex={{ base: "100%", md: "20%" }} textAlign={{ base: "center", md: "left" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Follow Us On
            </Text>
            <Stack direction="row" justify={{ base: "center", md: "flex-start" }}>
              <Link href="#" color="white" fontSize="1.5rem">
                <FaTwitter />
              </Link>
              <Link href="#" color="white" fontSize="1.5rem">
                <FaYoutube />
              </Link>
              <Link href="#" color="white" fontSize="1.5rem">
                <FaFacebook />
              </Link>
              <Link href="#" color="white" fontSize="1.5rem">
                <FaInstagram />
              </Link>
            </Stack>
          </Box>

      
          <Box flex={{ base: "100%", md: "20%" }} textAlign={{ base: "center", md: "left" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Join Our Team
            </Text>
            <Text fontSize="sm">
              Visit{" "}
              <Link
                href="https://www.edjoin.org"
                color="white"
                textDecoration="underline-on-hover"
              >
                EdConnect.org
              </Link>{" "}
              to view our open positions.
            </Text>
          </Box>


          <Box flex={{ base: "100%", md: "20%" }} textAlign={{ base: "center", md: "left" }}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              CodeStack Sites
            </Text>
            <Stack>
              <Link href="#" color="white" fontSize="sm" textDecoration="none">
                CodeHack
              </Link>
              <Link href="#" color="white" fontSize="sm" textDecoration="none">
                SEITE
              </Link>
              <Link href="#" color="white" fontSize="sm" textDecoration="none">
                EdConnect
              </Link>
              <Link href="#" color="white" fontSize="sm" textDecoration="none">
                Beyond SIETE
              </Link>
              <Link href="#" color="white" fontSize="sm"textDecoration="none">
                CodeHack Conference
              </Link>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FooterComponent;

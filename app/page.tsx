"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Rocket, Code, BookOpenCheck } from "lucide-react";

const MotionButton = motion(Button);
const MotionBox = motion(Box);

const features = [
  {
    icon: Rocket,
    title: "Build with Purpose",
    desc: "Production-ready apps that solve real problems.",
  },
  {
    icon: BookOpenCheck,
    title: "Teach by Doing",
    desc: "Hands-on pairing, code reviews, and mentoring.",
  },
  {
    icon: Code,
    title: "Smart Consulting",
    desc: "Lean, strategic guidance to scale your product.",
  },
];

export default function LandingPageChakra() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const heroGradient = "linear(to-br, #1D3557, #2EC4B6)";

  return (
    <Box bg={bg} color={useColorModeValue("gray.800", "white")} minH="100vh">
      {/* Logo Header */}
      <Flex as="header" align="center" justify="flex-start" px={6} py={4}>
        <HStack spacing={2}>
          {/* Replace src with your logo path */}
  
          <Text fontSize="2xl" fontWeight="bold" color="brand.700">
            Vooksio
          </Text>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        align="center"
        justify="center"
        minH="70vh"
        bgGradient={heroGradient}
        color="white"
      >
        <VStack spacing={6} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">
              Let’s build together.
            </Heading>
            <Text fontSize={{ base: "md", md: "xl" }} maxW="2xl" mx="auto">
              Turn your product ideas into working code with speed, clarity, and confidence.
            </Text>
          </MotionBox>
          <HStack spacing={6} pt={4}>
            <MotionButton
              bg="brand.500"
              color="white"
              size="lg"
              rounded="xl"
              px={8}
              boxShadow="lg"
              whileHover={{ scale: 1.05 }}
              _hover={{ bg: "brand.600" }}
            >
              Start Your Project
            </MotionButton>
            <MotionButton
              variant="outline"
              borderColor="whiteAlpha.800"
              color="white"
              size="lg"
              rounded="xl"
              px={8}
              boxShadow="md"
              whileHover={{ scale: 1.05 }}
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Book a Call
            </MotionButton>
          </HStack>
        </VStack>
      </Flex>

      {/* Features Section */}
      <Container
        maxW="6xl"
        py={20}
        as={MotionBox}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>
            Build · Teach · Consult
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}
          >
            Expert engineering meets practical mentoring and strategic consulting.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {features.map(({ icon, title, desc }, idx) => (
            <Box
              key={idx}
              bg={useColorModeValue("white", "gray.800")}
              rounded="2xl"
              shadow="lg"
              p={6}
              textAlign="center"
            >
              <Icon as={icon} w={8} h={8} color="brand.500" mb={4} />
              <Heading fontSize="xl" mb={2} color="brand.700">
                {title}
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.400")}>{desc}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Call to Action Banner */}
      <Box
        bg="yellow.300"
        py={16}
        as={MotionBox}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Container maxW="4xl" textAlign="center">
          <Heading mb={4} fontSize={{ base: "2xl", md: "4xl" }} color="brand.700">
            Ready to ship smarter?
          </Heading>
          <MotionButton
            bg="brand.700"
            color="white"
            size="lg"
            px={10}
            rounded="xl"
            boxShadow="lg"
            whileHover={{ scale: 1.05 }}
            _hover={{ bg: "brand.900" }}
          >
            Get a Free Strategy Session
          </MotionButton>
        </Container>
      </Box>

      {/* Footer */}
       {/* Footer */}
       <Box bg="brand.900" color="white" py={10} px={6}>
        <Container maxW="6xl">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <HStack spacing={2} mb={{ base: 4, md: 0 }}>
              <Image src="/logo.png" alt="Vooksio Logo" boxSize={6} objectFit="contain" />
              <Text fontSize="lg" fontWeight="bold">
                Vooksio
              </Text>
            </HStack>
            <HStack spacing={6} mb={{ base: 4, md: 0 }}>
              <Text as="a" href="/services" _hover={{ textDecoration: "underline" }}>
                Services
              </Text>
              <Text as="a" href="/projects" _hover={{ textDecoration: "underline" }}>
                Projects
              </Text>
              <Text as="a" href="/contact" _hover={{ textDecoration: "underline" }}>
                Contact
              </Text>
            </HStack>
            <Text fontSize="sm">© {new Date().getFullYear()} Vooksio. All rights reserved.</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

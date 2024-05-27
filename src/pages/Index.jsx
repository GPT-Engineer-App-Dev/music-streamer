import { Box, Container, Flex, Heading, Text, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaHome, FaSearch, FaBook, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">MusicStream</Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaSearch /> Browse</Link>
            <Link href="#"><FaBook /> Library</Link>
            <Link href="#"><FaUser /> Profile</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h1" size="2xl" mb={6}>Featured Playlists</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="300px">
            <Image src="https://via.placeholder.com/300" alt="Playlist 1" borderRadius="md" mb={4} />
            <Text fontSize="xl" fontWeight="bold">Playlist 1</Text>
            <Text>Some description about Playlist 1.</Text>
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="300px">
            <Image src="https://via.placeholder.com/300" alt="Playlist 2" borderRadius="md" mb={4} />
            <Text fontSize="xl" fontWeight="bold">Playlist 2</Text>
            <Text>Some description about Playlist 2.</Text>
          </Box>
          <Box bg="gray.700" color="white" p={4} m={2} borderRadius="md" width="300px">
            <Image src="https://via.placeholder.com/300" alt="Playlist 3" borderRadius="md" mb={4} />
            <Text fontSize="xl" fontWeight="bold">Playlist 3</Text>
            <Text>Some description about Playlist 3.</Text>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Text>&copy; 2023 MusicStream</Text>
            <HStack spacing={4}>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
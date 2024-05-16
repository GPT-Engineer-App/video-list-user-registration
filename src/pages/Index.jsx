import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, FormControl, FormLabel, Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaVideo, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [videos, setVideos] = useState([
    { id: 1, title: "Introduction to React", url: "https://www.youtube.com/embed/dGcsHMXbSOA" },
    { id: 2, title: "Advanced React Patterns", url: "https://www.youtube.com/embed/IL82CzlaCys" },
  ]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    // Reset form
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={10}>
        <Box w="full">
          <HStack spacing={4} mb={4}>
            <FaVideo />
            <Text fontSize="2xl" fontWeight="bold">
              视频列表
            </Text>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>URL</Th>
              </Tr>
            </Thead>
            <Tbody>
              {videos.map((video) => (
                <Tr key={video.id}>
                  <Td>{video.title}</Td>
                  <Td>{video.url}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box w="full">
          <HStack spacing={4} mb={4}>
            <FaUserPlus />
            <Text fontSize="2xl" fontWeight="bold">
              用户注册
            </Text>
          </HStack>
          <form onSubmit={handleFormSubmit}>
            <VStack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>用户名</FormLabel>
                <Input name="username" value={formData.username} onChange={handleInputChange} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>邮箱</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>密码</FormLabel>
                <Input type="password" name="password" value={formData.password} onChange={handleInputChange} />
              </FormControl>
              <Button type="submit" colorScheme="teal" width="full">
                注册
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

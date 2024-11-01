import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <Box bgColor={"gray"}>
      <Container maxW={"7xl"}>
        <Flex justify={"space-between"} py="4">
          <Text>Logo</Text>
          <Text display={{ base: "none", md: "block" }}>Profile</Text>
          <Box display={{ base: "block", md: "none" }}>
            <HiOutlineMenu size="20px" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

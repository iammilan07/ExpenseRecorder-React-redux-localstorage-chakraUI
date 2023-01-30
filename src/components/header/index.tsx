import { AiFillGithub } from "react-icons/ai";
import { Link, Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex mb={2} p={3} alignItems="center" justifyContent="space-between" >
      <Heading fontSize="16px" fontWeight="medium">Track Your expense</Heading>
      <Link
        margin-right="4px"
        className="icon"
        href="https://github.com/iammilan07"
        target="_blank"
      >
        <AiFillGithub />
      </Link>
    </Flex>
  );
};

export default Header;

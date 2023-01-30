import { Box, Tab, Tabs, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box position="sticky" bottom="0">
      <Box
        width="100%"
        marginTop="100%"
        paddingLeft="85px"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          border="1px solid black"
          borderRadius="10px"
          width="200px"
          backgroundColor="white"
        >
          <Tabs
            justifyContent="space-between"
            variant="soft-rounded"
            colorScheme="green"
            display="flex"
          >
            <Link to="/">
              <Tab>
                <AiOutlineHome />
              </Tab>
            </Link>
            <Link to="add-expense">
              <Tab>
                <BsBookmarkPlus />
              </Tab>
            </Link>
            <Link to="add-category">
              <Tab>
                <MdAddShoppingCart />
              </Tab>
            </Link>
            <Link to="details">
              <Tab>
                <BiCommentDetail />
              </Tab>
            </Link>
          </Tabs>
        </Box>
      </Box>
      <Box textAlign="center" marginLeft="20px">
        <Text visibility="hidden">Made with ❤️ in Reactredux!!</Text>
      </Box>
    </Box>
  );
};

export default Footer;

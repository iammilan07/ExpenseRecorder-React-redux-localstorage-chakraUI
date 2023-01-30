import { Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <Box
      color="#fff"
      display="flex"
      justify-content="space-around"
      align-items="center"
      padding="1rem 0"
      font-size="1rem"
      className="announcement"
    >
      <Marquee speed={150} gradient={false} pauseOnHover>
        <Box
          className="announcement-text text1"
          display="flex"
          align-items="center"
          margin-right=" 50rem"
          paddingLeft="10rem"
        >
          <Text fontSize="0.9rem" marginRight="10rem">
            Wellcome to Exp-Tracker!!
          </Text>
        </Box>
        <Box
          display="flex"
          align-items="center"
          margin-right=" 50rem"
          className="announcement-text text2"
        >
          <Text fontSize="0.9rem">Track Your daily expenses!! </Text>
        </Box>
      </Marquee>
    </Box>
  );
};

export default Announcement;

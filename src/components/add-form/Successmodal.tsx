import { Box, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Successmodal = (props: any) => {
  const { modalOpen } = props;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "grey",
      borderRadius: "12px",
    },
  };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <Box
        className="modal-inner"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <label>Expense Added Successfully</label>
        <Link to="/">
          <Box
            display="flex"
            className="take-home-button"
            border="1px solid black"
            padding="4px 8px"
            borderRadius="6px"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              marginRight="6px"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <AiOutlineHome />
            </Box>
            <Text>Home</Text>
          </Box>
        </Link>
      </Box>
    </Modal>
  );
};

export default Successmodal;

import { Box } from "@chakra-ui/react";
import React from "react";
import AddForm from "../../components/add-form/AddForm";

const Addexpense = () => {
  return (
    <Box className="add-expense" margin="auto">
      <AddForm />
    </Box>
  );
};

export default Addexpense;

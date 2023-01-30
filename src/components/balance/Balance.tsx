import * as fromExpenseStore from "../../store/expense";
import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";

export const Balance = () => {
  const data = useSelector(fromExpenseStore.selectExpenseList);
  let incc = 0;
  let decc = 0;
  data.forEach((expense: any) => {
    if (Number(expense.amount) > 0) {
      incc = incc + Number(expense.amount);
    } else {
      decc = decc - Number(expense.amount);
    }
  });
  return (
    <Box display="flex" marginBottom="5vh" marginLeft="60px">
      {/* <Text paddingRight="3px">Total expenditure =</Text> */}
      <Text as="b">Rs {incc - decc}</Text>
    </Box>
  );
};

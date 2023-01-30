import { HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
// import { selectExpenseList } from '../../redux/index';
import * as fromExpenseStore from "../../store/expense";

export const TotalExpense = () => {
  const data = useSelector(fromExpenseStore.selectExpenseListData);
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
    <HStack textAlign="center" justifyContent="center" display="flex">
      <Text as="b">Your whole Total Expenses=</Text>
      <Text as="b" color="red">
        RS {incc - decc}
      </Text>
    </HStack>
  );
};

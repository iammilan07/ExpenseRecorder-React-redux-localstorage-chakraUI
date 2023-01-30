import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectMappedList } from "../../store/expense/index";
import Card from "./Card";

const Newexpenselist = (props: any) => {
  //destructuring to props
  const { date } = props;
  //selector
  const list = useSelector(selectMappedList);

  const notifySuccess = () => toast.success("Deleted Successfully");

  return (
    <ul>
      {list &&
        Object.keys(list).map((key: any) => {
          return (
            <Box>
              {key === date && (
                <li key={key}>
                  <p>{key}</p>
                  {list[key]?.map((expense: any, index: number) => {
                    return (
                      <Card
                        key={index}
                        expense={expense}
                        notifySuccess={notifySuccess}
                      />
                    );
                  })}
                </li>
              )}
            </Box>
          );
        })}
    </ul>
  );
};

export default Newexpenselist;

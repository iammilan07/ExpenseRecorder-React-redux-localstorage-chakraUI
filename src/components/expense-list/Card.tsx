import moment from "moment/moment";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteExpensee } from "../../store/expense/index";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props: any) => {
  //destructuring props
  const { expense, id } = props;
  const notifySuccessDelete = () =>
    toast.success("Expense Deleted Successfully");
  const time = moment(expense?.createdAt).fromNow();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccessDelete();
    dispatch(deleteExpensee(expense));
  };

  return (
    <Box
      color="black"
      width="350px"
      borderRight={`6px solexpense ${expense?.category?.color}`}
      backgroundColor="white"
      padding="12px"
      margin="2px 0px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <Box className="card-image-container">
        <Image
          src={expense?.category?.icon}
          alt={expense?.category?.title}
          height="40px"
        />
      </Box>
      <Box
        className="card-info"
        display="flex"
        flex="1"
        flexDirection="column"
        marginLeft="12px"
      >
        <Text className="card-title" fontSize="20px">
          {expense?.title}
        </Text>
        <Text className="card-time" color="gray" fontSize="12px">
          {time}
        </Text>
      </Box>
      <Box
        className="card-right"
        display="flex"
        flexDirection="column-reverse"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Box>
          <Text className="card-amount" fontSize="20px" fontWeight="500">
            RS {expense?.amount}
          </Text>
        </Box>

        <HStack>
          <Text cursor="pointer" className="delete-icon" fontSize="16px">
            <AiOutlineDelete onClick={handleDelete} />
          </Text>

          <Text cursor="pointer" className="edit-icon" fontSize="16px">
            <AiOutlineEdit
              onClick={() => {
                navigate(`/edit-expense/${id}`);
              }}
            />
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default Card;

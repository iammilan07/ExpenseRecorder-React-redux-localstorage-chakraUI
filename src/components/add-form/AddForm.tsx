import { Box, Button, FormLabel, HStack, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { categories } from "../../constants/Addcategories";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addExpense } from "../../store/expense/actions";
import { selectCategoryList } from "../../store/category/selectors";

const AddForm = () => {
  let u = Date.now().toString(16) + Math.random().toString(16) + "0".repeat(16);
  let id = [u.substr(0, 8), "4000-8" + u.substr(13, 3)].join("-");
  const notifySuccessAdd = () => toast.success("Expenses Added Successfully");
  //State
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<any>();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const categoryList = useSelector(selectCategoryList);

  //functions
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e: any) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount(0);
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category: any) => {
    setCategory(category);
    setCategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === 0 || !category) {
      const notify = () => toast("Please enter a valid a data");
      notify();
      return;
    }
    const data = {
      id,
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));

    setModalOpen(!modalOpen);
    notifySuccessAdd();
    setTitle("");
    setAmount(0);
    setCategory("");
  };

  return (
    <Box className="add-from">
      <form>
        {/* <Successmodal modalOpen={modalOpen} /> */}
        <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
        <FormLabel>Title</FormLabel>
        <Input
          width="350px"
          placeholder="Expenditure Name"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
        <FormLabel paddingRight="7px">Amountरु</FormLabel>
        <Input
          className="amount-input"
          placeholder="Enter Amount"
          width="350px"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
        {/* Category */}
        <Box
          className="category-container-parent"
          border="1px solid white"
          borderRadius="5px"
          marginTop="15px"
          width="350px"
        >
          <Box className="category">
            <HStack
              backgroundColor="transparent"
              cursor="pointer"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <FormLabel paddingLeft="15px" paddingRight="13.5rem">
                {category ? category?.title : "Category"}
              </FormLabel>
              <IoIosArrowDropdown style={{ alignItems: "center" }} />
            </HStack>
            {/* categoryopen */}
            {categoryOpen && (
              <Box className="category-container" width="250px">
                {categoryList.map((category: any) => (
                  <Box
                    className="category-item"
                    style={{
                      borderRight: `5px solid ${category.color}`,
                    }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                  </Box>
                ))}
                {cat.map((category: any) => (
                  <Box
                    padding="10px"
                    justifyContent="space-between"
                    className="category-item"
                    style={{
                      borderRight: `5px solid ${category.color}`,
                    }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label style={{ cursor: "pointer" }}>
                      {category.title}
                    </label>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        <Box
          className="Form-add-button"
          paddingTop="50px"
          paddingLeft="280px"
          color="white"
        >
          <Stack direction="row" spacing={4}>
            <Button
              colorScheme="black"
              display="flex"
              onClick={handleSubmit}
              border="1px solid white"
              padding="2px 8px"
              borderRadius="6px"
              cursor="pointer"
              color="white"
              leftIcon={<AiOutlinePlus />}
              variant="solid"
            >
              Add
            </Button>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default AddForm;

// import {
//   Box,
//   Button,
//   Checkbox,
//   FormLabel,
//   HStack,
//   Input,
//   Select,
//   Stack,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { categories } from "../../constants/Addcategories";
// import { useDispatch, useSelector } from "react-redux";
// import { AiOutlinePlus } from "react-icons/ai";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { addExpense } from "../../store/expense/actions";
// import { selectCategoryList } from "../../store/category/selectors";
// import { useForm, Controller } from "react-hook-form";

// const AddForm = () => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   let u = Date.now().toString(16) + Math.random().toString(16) + "0".repeat(16);
//   let id = [u.substr(0, 8), "4000-8" + u.substr(13, 3)].join("-");
//   const notifySuccessAdd = () => toast.success("Expenses Added Successfully");
//   //State
//   const [categoryOpen, setCategoryOpen] = useState(false);
//   const cat = categories;
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState(0);
//   const [category, setCategory] = useState<any>();
//   const dispatch = useDispatch();
//   const [modalOpen, setModalOpen] = useState(false);
//   const categoryList = useSelector(selectCategoryList);

//   //functions
//   const handleTitle = (e: any) => {
//     setTitle(e.target.value);
//   };
//   const handleAmount = (e: any) => {
//     const val = parseFloat(e.target.value);
//     if (isNaN(val)) {
//       setAmount(0);
//       return;
//     }
//     setAmount(val);
//   };
//   const handleCategory = (category: any) => {
//     setCategory(category);
//     setCategoryOpen(false);
//   };
//   const onhandleSubmit = (data: any) => {
//     if (title === "" || amount === 0 || !category) {
//       const notify = () => toast("Please enter a valid a data");
//       notify();
//       return;
//     }
//     // const data = {
//     //   id,
//     //   title,
//     //   amount,
//     //   category,
//     //   createdAt: new Date(),
//     // };
//     dispatch(addExpense(data));

//     setModalOpen(!modalOpen);
//     notifySuccessAdd();
//     setTitle("");
//     setAmount(0);
//     setCategory("");
//   };

//   return (
//     <Box className="add-from">
//       <form onSubmit={handleSubmit(onhandleSubmit)}>
//         {/* <Successmodal modalOpen={modalOpen} /> */}
//         <ToastContainer
//           position="bottom-left"
//           autoClose={1500}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//         />
//         <FormLabel>Title</FormLabel>
//         <Box marginTop="5px" backgroundColor="transparent" width="350px">
//           <input
//             placeholder="add-Expense"
//             style={{ color: "white", height: "40px", borderRadius: "7px" }}
//             {...register("title", { required: true, maxLength: 20 })}
//           />
//         </Box>
//         {errors?.title?.type === "required" && (
//           <p style={{ color: "red" }}>This field is required!! ⚠</p>
//         )}

//         <FormLabel paddingRight="7px">Amountरु</FormLabel>
//         <Box marginTop="5px" backgroundColor="transparent" width="350px">
//           <input
//             placeholder="add-category"
//             style={{ color: "white", height: "40px", borderRadius: "7px" }}
//             {...register("amount", { required: true, maxLength: 20 })}
//           />
//         </Box>
//         {errors?.amount?.type === "required" && (
//           <p style={{ color: "red" }}>This field is required!! ⚠</p>
//         )}
//         {/* Category */}
//         <Controller
//           render={({ field }) => <input {...field} />}
//           name="lastName"
//           control={control}
//           defaultValue=""
//         />
//         <label>Ice Cream Preference</label>
//         <Controller
//           name="iceCreamType"
//           render={({ field }) => (
//             <>
//               {categoryList.map((category: any) => (
//                 <Box
//                   className="category-item"
//                   style={{
//                     borderRight: `5px solid ${category.color}`,
//                   }}
//                   key={category.id}
//                   onClick={() => handleCategory(category)}
//                 >
//                   <label>{category.title}</label>
//                 </Box>
//               ))}
//             </>
//           )}
//           control={control}
//           defaultValue=""
//         />
//         <Controller
//           name="Checkbox"
//           control={control}
//           render={({ field }) => <Checkbox {...field} />}
//         />
//         <Box
//           className="category-container-parent"
//           border="1px solid white"
//           borderRadius="5px"
//           marginTop="15px"
//           width="350px"
//         >
//           <Box className="category">
//             <HStack
//               backgroundColor="transparent"
//               cursor="pointer"
//               onClick={() => setCategoryOpen(!categoryOpen)}
//             >
//               <FormLabel paddingLeft="15px" paddingRight="13.5rem">
//                 {category ? category?.title : "Category"}
//               </FormLabel>
//               <IoIosArrowDropdown style={{ alignItems: "center" }} />
//             </HStack>
//             {/* categoryopen */}
//             {categoryOpen && (
//               <Box className="category-container" width="250px">
//                 {categoryList.map((category: any) => (
//                   <Box
//                     className="category-item"
//                     style={{
//                       borderRight: `5px solid ${category.color}`,
//                     }}
//                     key={category.id}
//                     onClick={() => handleCategory(category)}
//                   >
//                     <label>{category.title}</label>
//                   </Box>
//                 ))}
//                 {cat.map((category: any) => (
//                   <Box
//                     padding="10px"
//                     justifyContent="space-between"
//                     className="category-item"
//                     style={{
//                       borderRight: `5px solid ${category.color}`,
//                     }}
//                     key={category.id}
//                     onClick={() => handleCategory(category)}
//                   >
//                     <label style={{ cursor: "pointer" }}>
//                       {category.title}
//                     </label>
//                   </Box>
//                 ))}
//               </Box>
//             )}
//           </Box>
//         </Box>
//         <Box
//           className="Form-add-button"
//           paddingTop="50px"
//           paddingLeft="280px"
//           color="white"
//         >
//           <Stack direction="row" spacing={4}>
//             <Button
//               colorScheme="black"
//               display="flex"
//               // onClick={handleSubmit}
//               border="1px solid white"
//               padding="2px 8px"
//               borderRadius="6px"
//               cursor="pointer"
//               color="white"
//               leftIcon={<AiOutlinePlus />}
//               variant="solid"
//             >
//               Add
//             </Button>
//           </Stack>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default AddForm;

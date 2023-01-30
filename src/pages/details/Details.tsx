import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import {
  selectExpenseList,
  selectpiechart,
  selectpiechartcat,
} from "../../store/expense/index";
import { PieChart, Pie, Cell, Legend } from "recharts";

import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Newexpenselist from "../../components/expense-list/Newexpenselist";
import { Calendar } from "react-calendar";
const Details = () => {
  //state
  const [date, setDate] = useState(new Date());
  //selector
  const list = useSelector(selectExpenseList);
  const data = useSelector(selectpiechart);
  const data2 = useSelector(selectpiechartcat);
  //piecharts
  const COLORS = ["red", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <Box>
      {/* <pre>{JSON.stringify(data1, null, 2)}</pre> */}

      <Link to="/">
        <Button
          width="65px"
          height="30px"
          fontSize="12px"
          border="1px solid black"
          borderRadius="6px"
          backgroundColor="cyan.400"
          marginLeft="280px"
        >
          <HStack justifyContent="center" alignItems="center">
            <AiOutlineHome />
            <Text>Home</Text>
          </HStack>
        </Button>
      </Link>
      <Text textAlign="center">Expenses Details</Text>
      <Box alignItems="center" justifyContent="center">
        <Box marginTop="50px">
          <PieChart width={400} height={400}>
            <Legend layout="vertical" verticalAlign="top" align="center" />
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {list.map((expense: any, index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <Text as="b" paddingLeft="100px">
            Pie-Chart based on expenses.
          </Text>
        </Box>
        <Box paddingTop="50px">
          <PieChart width={400} height={500}>
            <Legend layout="vertical" verticalAlign="top" align="center" />
            <Pie
              data={data2}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {list.map((expense: any, index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <Text as="b" paddingLeft="100px">
            Pie-Chart based on category.
          </Text>
        </Box>
      </Box>
      <Box
        className="app"
        alignItems="center"
        paddingLeft="20px"
        marginRight="20px"
        paddingTop="50px"
        width="300px"
      >
        <Text className="header">Items According to the date!!</Text>
        <Calendar onChange={setDate} value={date} />
        <Box className="text-center">
          Expense list of: {date.toLocaleDateString()}
        </Box>
      </Box>

      <Box marginLeft="10px">
        <Newexpenselist date={date.toLocaleDateString()} />
      </Box>
    </Box>
  );
};

export default Details;

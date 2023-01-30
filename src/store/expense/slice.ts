import { createSlice } from "@reduxjs/toolkit";

import { storageKey } from "../../constants/index";


const initialList = () => {
    const list = localStorage.getItem("expense-list");
    let expenses = [];
    if (list) {
        expenses = JSON.parse(list);
    }
    return expenses;
};


const initialState = {
    expense: initialList(),

};

const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {

        fetchExpense: (state: any, action: any) => {
            state.expense = action.payload
            // console.log(state.expanse);
        },

        addExpense: (state: any, action: any) => {
            const newList = [...state.expense, action.payload]
            localStorage.setItem(storageKey, JSON.stringify(newList));
            state.expense = newList
        },


        deleteExpense: (state: any, action: any) => {
            const newStatee = state.expense.filter((item: any) => item.id !== action.payload.id);
            localStorage.setItem(storageKey, JSON.stringify(newStatee));
            state.expense = newStatee;
        },





        editExpense: (state, action) => {
            const expense: any = window.localStorage.getItem('expense-list');
            const parsedExpenseDataFromStorage = JSON.parse(expense)
            const filteredExpenseData = parsedExpenseDataFromStorage.map((expenseData: any) => {
                if (expenseData.id === action.payload.id) {
                    return action.payload
                }
                return expenseData
            })
            localStorage.setItem(storageKey, JSON.stringify(filteredExpenseData))
            state.expense = filteredExpenseData
        }







    },
});

export const {
    fetchExpense, addExpense, deleteExpense, editExpense
} = expenseSlice.actions;

export default expenseSlice.reducer;

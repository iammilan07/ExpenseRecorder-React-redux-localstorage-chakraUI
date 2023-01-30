import { createSlice } from "@reduxjs/toolkit";
import { storagevalue } from "../../constants";

const initialListCat = () => {
    const item = localStorage.getItem("category-list");
    let categories = [];
    if (item) {
        categories = JSON.parse(item);
    }
    return categories;
};

const initialState = {
    category: initialListCat(),
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const newData = [...state.category, action.payload];
            localStorage.setItem(storagevalue, JSON.stringify(newData));
            state.category = newData
        },
    },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;

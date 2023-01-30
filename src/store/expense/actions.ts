import * as fromSlice from "./slice"

export const fetchExpense = (): any => async (dispatch: any) => {
    const response: any = await localStorage.getItem('expense-list')
    if (response) {
        dispatch(fromSlice.fetchExpense(JSON.parse(response)))
    }
}

export const addExpense = (expense: any): any => async (dispatch: any) => {
    dispatch(fromSlice.addExpense(expense))
    const response = await localStorage.getItem(expense);

    if (response) {
        const data: any = response;
        dispatch(fromSlice.addExpense(data))
    }
}

export const deleteExpensee = (id: any): any => (dispatch: any) => {
    dispatch(fromSlice.deleteExpense(id))
};

export const editExpense = (expenseState: any) => (dispatch: any) => {
    dispatch(fromSlice.editExpense(expenseState))
};




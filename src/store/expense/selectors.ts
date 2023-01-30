export const selectExpenseList = (state: any) => state.expenseList.expense;

export const selectLoading = (state: any) => state.expenseList.loading;
export const selectMappedList = (state: any) => {
    let x: any = {}
    const mapped = state.expenseList.expense.map((item: any) => {
        return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleDateString("en-US"),
        }
    })
    mapped.forEach((item: any) => {
        if (!x[item.createdAt]) {
            x[item.createdAt] = [];
            x[item.createdAt].push(item);
        } else {
            x[item.createdAt].push(item);
        }
    })
    return x
};


export const selectExpenseListData = (state: any) => {
    let x: any = {}
    const mapped = state.expenseList.expense.map((item: any) => {
        return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleDateString("en-US"),
        }
    })
    mapped.forEach((item: any) => {
        if (!x[item.createdAt]) {
            x[item.createdAt] = [];
            x[item.createdAt].push(item);
        } else {
            x[item.createdAt].push(item);
        }
    })
    let f: any = {};
    Object.keys(x).forEach((key: any) => {
        const expenseCloned = x[key];
        const total = expenseCloned.reduce((acc: any, curr: any) => {
            return acc + curr.amount
        }, 0)
        expenseCloned.push({
            title: 'Total',
            amount: total,
        })
        f[key] = expenseCloned
    })
    return f;
};

export const selectpiechart = (state: any) => {
    const data: any = []
    Object.entries(selectMappedList(state)).forEach(entry => {
        const [key, value]: any = entry;
        var total_amount_ofaday = 0
        value.forEach((element: any) => {
            total_amount_ofaday += element['amount']
        });
        data.push({ "name": key, "value": total_amount_ofaday })
    })
    return data
};


export const selectcategoryList = (state: any) => {
    let x: any = {}
    const mapped = state.expenseList.expense.map((item: any) => {
        return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleDateString("en-US"),
            category: (item.category.title),
        }
    })
    mapped.forEach((item: any) => {
        if (!x[item.category]) {
            x[item.category] = [];
            x[item.category].push(item);
        } else {
            x[item.category].push(item);
        }
    })
    return x
};

export const selectpiechartcat = (state: any) => {
    const data: any = []
    Object.entries(selectcategoryList(state)).forEach(entry => {
        const [key, value]: any = entry;
        var total_amount_ofaday = 0
        value.forEach((element: any) => {
            total_amount_ofaday += element['amount']
        });
        data.push({ "name": key, "value": total_amount_ofaday })
    })
    return data
};

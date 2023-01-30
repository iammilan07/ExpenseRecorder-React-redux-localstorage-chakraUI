import * as fromSlice from "../category/slice"

export const addCategory = (category: any): any => (dispatch: any) => {
    dispatch(fromSlice.addCategory(category))
};
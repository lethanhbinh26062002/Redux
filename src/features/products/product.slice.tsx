import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, list, read, remove, update } from "../../api/productApi";

// Action
export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const { data } = await list();
    return data
});
export const createProduct = createAsyncThunk("products/createProducts", async (product: any) => {
    const { data } = await create(product)
    alert("Create thành công")
    return data;
});
// export const readProduct = createAsyncThunk("products/readProduct", async (id: any) => {
//     const { data } = await read(id)
//     return data;
// });
export const removeProduct = createAsyncThunk("products/removeProduct", async (id: any) => {
    const { data } = await remove(id)
    alert("Delete thành công")
    return data
});
export const updateProduct = createAsyncThunk("products/updateProduct", async (product: any) => {
    const { data } = await update(product)
    alert("Update thành công")
    return data;
});

interface IProductState {
    value: any[];
}
const initialState: IProductState = {
    value: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload;
        })
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.value.push(action.payload);
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.value = state.value.map(item => item.id === action.payload.id ? action.payload : item);
        })
        builder.addCase(removeProduct.fulfilled, (state, action) =>{
            state.value = state.value.filter(item => item.id !== action.payload.id)
        })
        // builder.addCase(readProduct.fulfilled, (state, action) => {
        //     state.value = state.value.filter(item => item.id === action.payload.id)
        // })

    },
});

export default productSlice.reducer;

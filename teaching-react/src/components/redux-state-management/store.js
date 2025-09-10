import { configureStore, createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({

    name:'cart',
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload);
        },
        removeItem:(state,action)=>{
            return state.filter((item,index)=>index!==action.payload);
        }
    },
});

export const {addItem,removeItem}=cartSlice.actions;
const store=configureStore({
    reducer:{
        cart:cartSlice.reducer
    },
})
export default store;
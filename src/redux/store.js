import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/dataSlice";
// import basketSlice from "./slice/basketSlice";


const store =configureStore({
    reducer:{
        data: dataSlice,
        // basket: basketSlice
    }
})

export default store
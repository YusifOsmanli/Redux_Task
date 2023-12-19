import { createSlice } from "@reduxjs/toolkit";

const favourite =createSlice({
   name:"favorite",
   initialState:{
      favorite: localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [],
   },
   reducers:{
      AddToWishlist:(state, action) => {
         let target = state.favorite.find(item => item.id == action.payload.id)
         if (!target) {
                      state.favorite = [...state.favorite, action.payload]
                          localStorage.setItem("favorite", JSON.stringify([...state.favorite]))
         } else {
           alert("")
                       }
     }
   }
})
export default favourite.reducer


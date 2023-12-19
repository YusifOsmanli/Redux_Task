  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  import axios from "axios";
  export const getData = createAsyncThunk("getData", async () => {
    const res = await axios.get("http://localhost:3000/books")
    return res.data
  })

  export const getDataById = createAsyncThunk("getDataById", async (id) => {
    const res = await axios.get(`http://localhost:3000/books/${id}`)
    return res.data
  })

  export const deleteData = createAsyncThunk("deleteData", async (item) => {
    const res = await axios.delete(`http://localhost:3000/books/${item.id}`)
    return item
  })

  export const updateData = createAsyncThunk("updateData", async ({ id, updateData }) => {
    const res = await axios.put(`http://localhost:3000/books/${id}`, updateData)
    return res.data
  })


  const data = createSlice({
    name: "data",
    initialState: {
      data: [],
      item: {},
      error: "",
      loading: false
    },
    extraReducers: (builder) => {
      builder.addCase(getData.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      builder.addCase(getData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })


      builder.addCase(deleteData.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false
        state.data = [...state.data.filter(item => item.id != action.payload.id)]
      })
      builder.addCase(deleteData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })



      builder.addCase(updateData.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(updateData.fulfilled, (state, action) => {
        state.loading = false
        state.data = [...state.data.filter(item => item.id != action.payload.id), action.payload]
      })
      builder.addCase(updateData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })


      builder.addCase(getDataById.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getDataById.fulfilled, (state, action) => {
        state.loading = false
        state.item = action.payload
      })
      builder.addCase(getDataById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })


    }
  })
  export default data.reducer
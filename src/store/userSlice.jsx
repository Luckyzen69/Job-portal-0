import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    value:null
  },
  reducers: {
   setUser: (state)  =>{
    state.value = {name:"ram"}
   },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer
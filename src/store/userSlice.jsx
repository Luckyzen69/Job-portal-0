import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    data:null,
    loading:false,
    error:null,
  },
  reducers: {
   setUser: (state,action)=>{
    state.data =action.payload,
    state.loading = false;
    state.error = null;
   },
   setLoading: (state) => {
    state.loading = true;
  },
  setError: (state, action) => {
    state.error = action.payload;
    state.loading = false;
  },
  },
});
   
// Async thunk for fetching user data
export const fetchUserData = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get('http://localhost:8000/api/user');
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Action creators are generated for each case reducer function
export const { setUser,setLoading,setError } = userSlice.actions; 

export default  userSlice.reducer;
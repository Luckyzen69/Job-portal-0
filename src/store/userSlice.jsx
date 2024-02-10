import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { useSelector } from 'react-redux';

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
// const user = res.data.user.id;

export const fetchUserData = (user,token) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const token = useSelector(state => state.auth.token);
    localStorage.setItem('authToken', res.data.token); // Or store in cookies
    const response = await axios.get(`http://localhost:8000/api/user/${user}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
   
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Action creators are generat  ed for each case reducer function
export const { setUser,setLoading,setError } = userSlice.actions; 

export default  userSlice.reducer;
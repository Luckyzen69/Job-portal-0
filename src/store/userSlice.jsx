import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
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



//  fetching user data
export const fetchUserData = (user) => async (dispatch) => {
 
  try {
    const token = await response.data.token; // This line is likely causing the error
         localStorage.setItem('token', token);

    dispatch(setLoading());
    
    
    const response = await axios.get('/api/top', {
      headers: {
        Authorization: `${token}`,
      },
    });
    
    console.log('user:', user);
    console.log('token:', token);

    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};  

// Action creators are generated for each case reducer function
export const { setUser, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;

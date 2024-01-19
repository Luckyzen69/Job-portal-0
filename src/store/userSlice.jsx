import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


// using easier syntax


    export  const loginUser =createAsyncThunk(
        'user/loginUser',
        async(userCredentials)=>{
             await axios.post(`http://localhost:8000/api/login/`,userCredentials)
            .then(res=>{
                        console.log(res.data);  
                        alert('success')  ;
        
                        const token = res.data.token
                        if (token) {
                            // Include the token in your request headers or wherever it's needed
                            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                          } else {
                            // Handle the case where the token is not available
                            console.error('Token not found in localStorage');
                            return res.status(401).send("invaid credentials")}
                            // navigate('/home')
                            // const user = req.body.username   
                            
                            // login(user);
                            localStorage.setItem('token',res.data.token) 
                            console.log(res.data.tokenS);
                        })
                        // const response = await request.data.data;
            // return res.data.token;
        }
        

    )


    const userSlice = createSlice({
        name : 'user',
        initialState:{
            loading: false,
            user:null,
            error:null,
        },
        extraReducers:(builder)=>{
            builder
            .addCase(loginUser.pending,(state)=>{
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.loading = false,
                state.user = action.payload;
                state.error= null;
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.loading = true;
                state.user = null;
                console.log(action.error.message);
               if(action.error.message === 'Request failed with  status code 401'){
                state.error = "Access Deniled! Invalid Credentials";
               }else{
                state.error = action.error.message
               }
            })
        }
    })
    export default  userSlice.reducer;
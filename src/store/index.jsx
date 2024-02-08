import { configureStore } from "@reduxjs/toolkit";
import userReducer,{ fetchUserData } from "./userSlice"
import { thunk } from "redux-thunk";


     const store =configureStore({
        reducer:{
            user: userReducer ,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
     })
     store.dispatch(fetchUserData());
     export default store;
     ;
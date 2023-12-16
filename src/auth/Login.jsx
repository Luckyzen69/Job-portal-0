import React from "react";
import Header from "../components/header";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Login({setProgress}){
    useEffect(()=>{
        setProgress(30);
        setTimeout(()=>{
            setProgress(100)
        },1000);
    },[]);
    return<>
   
    <div className="">
        <h2 className="text-2xl m-2 p-4 text-center bg-light " >Login</h2>
        <div className=" justify-center items-center flex m-4 p-4">
        <form  className="grid m-4 justify-center border p-10 font-sans    ">
            <label htmlFor="login" className="font-bold flex">Username</label>
            <input type="Username" placeholder="Username*" className="border flex m-2 p-2 lg:w-96 " />
            <label htmlFor="password" className="font-bold flex" >Password</label>
            <input type="password" name="password" id="password" placeholder="Password*" className="border flex m-2 mb-4 p-2 " />
            <Link to="/error" className="border flex hover:ring-2 bg-primary text-white text-center p-2 text-xl">Login</Link>
            <Link to="/error" className="font-sans p-2 m-2">Not a member? <Link to="/register" className="font-bold"> register</Link></Link>
        </form>
        </div>
    </div>
    </>
}
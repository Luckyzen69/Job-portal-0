import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
export default function Login(){
    return<>
   
    <div className="">
        <h2 className="text-2xl m-2 p-4 text-center bg-light " >Login</h2>
        <div className=" justify-center items-center flex m-4 p-4">
        <form  className="grid m-4 justify-center border p-10 font-sans  ">
            <label htmlFor="login" className="font-bold">Username</label>
            <input type="Username" placeholder="Username*" className="border m-2 p-2 w-96" />
            <label htmlFor="password" className="font-bold" >Password</label>
            <input type="password" name="password" id="password" placeholder="Password*" className="border m-2 mb-4 p-2 " />
            <button className="border hover:ring-2 bg-primary text-white p-2 text-xl">Login</button>
            <p className="font-sans p-2 m-2">Not a member? <Link to="/register" className="font-bold"> register</Link></p>
        </form>
        </div>
    </div>
    </>
}
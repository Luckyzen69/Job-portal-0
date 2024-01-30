import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./authProvider";
import { fetchUserData } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Login({setProgress}){
    useEffect(()=>{
        setProgress(30);
        setTimeout(()=>{
            setProgress(100)
        },1000);
    },[]);


    
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state)=>state.user)
    
    
    async function submit(e){

        e.preventDefault()
            axios.post(`http://localhost:8000/api/login/`,
            { 
                email:email,
                password:password
            }).then(res=>{
                //when status code is in 2's line
                toast("Login sucessfull")
                console.log(res.data.user);
                navigate("/")
                dispatch(fetchUserData());
            })
            .catch((err)=> {
            console.log(err);
            if(err.response?.status === 401){
                return toast.error("Invalid Credentials")
            }
            toast.error("505 back end error ")  
            //when code status is 3,4,5
        })
        }
    return<>
    
                                    {/* login  */}
    <div >

        <h2 className="text-2xl m-2 p-4 text-center bg-light font-bold font-mono" >Login</h2>

        <div className=" justify-center items-center flex m-8 p-4  ">
        <form className="grid m-2 justify-center border rounded p-6 font-sans" action="POST">
            <label htmlFor="login" className="font-bold flex ">Email</label>
            <input type="email"  placeholder="email*" onChange={(e)=>{setEmail(e.target.value)}} className="border flex m-2 p-2 lg:w-96 " />
            <label htmlFor="password" className="font-bold flex"  >Password</label>
            <input type="password" autoComplete="off" name="password" id="password" placeholder="Password*"  onChange={(e)=>{setPassword(e.target.value)}} className="border flex m-2 mb-4 p-2 " />
            <button type="submit"  onClick={submit} className="border flex hover:ring-2 bg-primary justify-center text-white text-center p-2 text-xl">
                {loading? 'Loading..':'Login'}
            </button>
            {error&&(
                <div className="alert alert-danger" role="alert">{error}</div>
            )}

            <div className="flex m-4">

            <p className="font-sans  mr-2">Not a member?
             </p>
             <Link to="/register" className="font-bold"> register</Link>
            </div>
        </form>
        </div>
    </div>
    </>
}   
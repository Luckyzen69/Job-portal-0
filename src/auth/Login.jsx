import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
                  
    async function submit(e){
        e.preventDefault()
        try{

         await axios.post('http://localhost:8000/api/login/',{
                email:email,
                password:password
            })
            .then(res=>{
                console.log(res.data);
                alert('success')
                localStorage.setItem('token',res.data.token)
                navigate('/home',{state:{id:email}})
            })
            .catch(e=>{
                alert("wrong email or password")
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }
        }
    return<>
    
                                    {/* login  */}
    <div >

        <h2 className="text-2xl m-2 p-4 text-center bg-light font-bold font-mono" >Login</h2>

        <div className=" justify-center items-center flex m-8 p-4  ">
        <form className="grid m-2 justify-center border rounded p-6 font-sans" action="POST">
            <label htmlFor="login" className="font-bold flex ">Email</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email*" className="border flex m-2 p-2 lg:w-96 " />
            <label htmlFor="password" onChange={(e)=>{setPassword(e.target.value)}}  className="font-bold flex" >Password</label>
            <input type="password" autoComplete="off" name="password" id="password" placeholder="Password*" className="border flex m-2 mb-4 p-2 " />
            <button type="submit"  onClick={submit} className="border flex hover:ring-2 bg-primary justify-center text-white text-center p-2 text-xl">Login</button>

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
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register({ setProgress }) {
  const formRef = useRef(null); 
   let form = document.getElementsByClassName("form-field");
  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);      

    const navigate = useNavigate();

    const  [user, setUser] = useState({
        username:"",  
        email:"",
        password:"",
        phone:""  
    })

    //handeling input values
    const HandleInput = (e)=>{
      console.log(e);
      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ... user,
        [name]: value,
      })
    }

    // handeling the form submit
    const handleSubmit = async(e) =>{
      e.preventDefault();
      console.log(user);
      try{

        const response = await fetch(`http://localhost:8000/api/signup/`,{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*" 
          },
          body: JSON.stringify(user),

        }).then((res)=>res.json())
        .then((data)=>{
          console.log(data);
        })

        if(response.ok) {
          setUser({username:"",email:"",phone:"",password:""},()=>{
            navigate("/login")
          });
        }
        console.log(response);
      } catch(error){
        console.log("register",error);
      }
      };

  return (
    <>
      <div>
        <h2 className="text-2xl  p-4 text-center bg-light font-bold h-full w-full font-mono   ">
          Register
        </h2> 
        <div className=" justify-center items-center">
          <form className="grid m-2 justify-center border rounded p-5 font-sans lg:grid-cols-2 md:grid-cols-2 gap-6"
           onSubmit={handleSubmit} onLoad={form}   ref={formRef} >

            {/* username */}
            <div >
              <label htmlFor="username" className="font-bold">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username*"
                className="border rounded m-2 p-2 w-full "
                />
            </div>
                        
                        {/* email  */}
            <div className="m-2">
              <label htmlFor="email"  className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                className="border rounded m-2 p-2 w-full"
                value={user.email} 
                  onChange={HandleInput}
                />
            </div>

            <div className="m-2">
              <label htmlFor="phone" className="font-bold">
                Phone
              </label>
              <input
                type="string"
                name="phone"
                id="phone"
                placeholder="Number*"
                className="border rounded m-2 p-2 w-full"
                />
            </div>

            <div className="m-2">
              <label htmlFor="role" className="font-bold">
                Role
              </label>
              <select name="role" id="role" className="border rounded p-2 m-2 w-full row-start-1 col-start-1">
                <option value="JobSeeker" id="JobSeeker" >JobSeeker</option>
                <option value="JobRecuiter" id="JobRecuiter">JobRecuiter</option>
              </select>
            </div>
            <div className="m-2">
              <label htmlFor="password"  className="font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password*"
                autoComplete="off"
                className="border rounded m-2 mb-4 p-2  w-full"
              />
            </div>
            <div className="m-2">
              <label htmlFor="password"  className="font-bold">
                Conform Password
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder=" confirm Password*"
                autoComplete="off"
                className="border rounded m-2 mb-4 p-2  w-full"
              />
            </div>
            
            <div className="form-field">
            </div>

           <div 
           >
            <label htmlFor="gender" className="font-bold">Gender</label>
            <select name="gender" id="gender" className="border rounded m-2 p-2 w-full ">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
           </div>
x``
            <button type="submit"
              className="border rounded hover:ring-2 bg-primary text-center text-white p-2 text-xl m-2 ">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

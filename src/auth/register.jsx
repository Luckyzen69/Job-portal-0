import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register({ setProgress }) {

     useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);      

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("")
    const [gender, setGender] = useState("")
    // const  [user, setUser] = useState({
    //     username:"",  
    //     email:"",
    //     password:"",
    //     phone:"" ,
    //     role:"" ,
    //     gender:""
    // })


    // handeling the form submit
    async function submit(e) {
      e.preventDefault();
      // console.log(user);
      try{

        await axios.post(`http://localhost:8000/api/signup/`,{
          username:username, 
          email:email,
          password:password,
          phone:phone,
          gender:gender,

       }).then((res)=>{
            if(res.data==="exist"){
              alert('User  already  exists')
            }else if(res.data==="notexist"){
              alert('success')
              localStorage.setItem('token',res.data.token)
              navigate("/home",{state:{id:email}})
            }
        })
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
          <form method="POST" className="grid m-2 justify-center border rounded p-5 font-sans lg:grid-cols-2 md:grid-cols-2 gap-6" >

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
                onChange={(e)=>{setUsername(e.target.value)}}
                className="border rounded m-2 p-2 w-full "
                />
            </div>
                        
                        {/* email  */}
            <div className="m-2">
              <label htmlFor="email"   className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                name="email"
                placeholder="Email*"
                className="border rounded m-2 p-2 w-full" />
            </div>

            <div className="m-2">
              <label htmlFor="phone" className="font-bold">
                Phone
              </label>
              <input
                type="string"
                name="phone"
                id="phone"
                onChange={(e)=>{setPhone(e.target.value)}}
                placeholder="Number*"
                className="border rounded m-2 p-2 w-full"
                />
            </div>

            <div className="m-2">
              <label htmlFor="role" className="font-bold">
                Role
              </label>
              <select name="role" id="role" className="border rounded p-2 m-2 w-full row-start-1 col-start-1">
                <option value="JobSeeker" id="JobSeeker"   onChange={(e)=>{setRole(e.target.value)}} >JobSeeker</option>
                <option value="JobRecuiter" id="JobRecuiter"   onChange={(e)=>{setRole(e.target.value)}}>JobRecuiter</option>
              </select>
            </div>
            <div className="m-2">
              <label htmlFor="password"  className="font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                id="password"
                placeholder="Password*"
                autoComplete="off"
                className="border rounded m-2 mb-4 p-2  w-full"
              />
            </div>
            <div className="m-2">
              <label htmlFor="password"  className="font-bold">
                Confirm Password
              </label>
              <input
                type="password"
                name="cpassword"
                onChange={(e)=>{setPassword(e.target.value)}}
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
                <option value="male"   onChange={(e)=>{setGender(e.target.value)}}>Male</option>
                <option value="female"   onChange={(e)=>{setGender(e.target.value)}}>Female</option>
            </select>
           </div>
            <button type="submit" onClick={submit}
              className="border rounded hover:ring-2 bg-primary text-center text-white p-2 text-xl m-2 ">
              Create Account
            </button>
            <div>
              
           <p className=" font-sans">Already have an account?</p>
           <Link to="/login"  className="font-bold underline font-sans">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

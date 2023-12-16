import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Register({ setProgress }) {
   let form = document.getElementsByClassName("form-field")
  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);      
    if (!form) {
       <>
       <div className="form-field ">
            <label htmlFor="">Company</label>
            <input type="text" className="border w-full" />
          </div>
       </>
    }

  return (
    <>
      <div>
        <h2 className="text-2xl  p-4 text-center bg-light font-bold h-full w-full    ">
          Register
        </h2>
        <div className=" justify-center items-center">
          <form className="grid m-5 justify-center border rounded p-10 font-sans lg:grid-cols-2 md:grid-cols-2 gap-6">
            <div  classname="flex gap-20">
              <label htmlFor="register" className="font-bold">
                Username
              </label>
              <input
                type="Username"
                placeholder="Username*"
                className="border rounded m-2 p-2 w-full "
              />
            </div>

            <div classname="flex">
              <label htmlFor="register" className="font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="Email*"
                className="border rounded m-2 p-2 w-full"
              />
            </div>

            <div classname="m-5">
              <label htmlFor="register" className="font-bold">
                Phone
              </label>
              <input
                type="phone"
                placeholder="Number*"
                className="border rounded m-2 p-2 w-full"
              />
            </div>

            <div classname="m-5">
              <label htmlFor="register" className="font-bold">
                Role
              </label>
              <select name="role" id="role" className="border rounded p-2 m-2 w-full">
                <option value="JobSeeker" id="JobSeeker">JobSeeker</option>
                <option value="JobRecuiter" id="JobRecuiter">JobRecuiter</option>
              </select>
            </div>

            <div classname="m-5">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password*"
                className="border rounded m-2 mb-4 p-2  w-full"
              />
            </div>
            <div className="form-field">

            </div>

           <div classname="">
            <label htmlFor="gender" className="font-bold">Gender</label>
            <select name="gender" className="border rounded m-2 p-2 w-full ">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
           </div>

            <Link
              to="/error"
              className="border rounded hover:ring-2 bg-primary text-center text-white p-2 text-xl m-2 ">
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

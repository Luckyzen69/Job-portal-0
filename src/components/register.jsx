import { Link } from "react-router-dom"
export default function Register(){
    return <>
     
     <div >
        <h2 className="text-2xl m-2 p-4 text-center bg-light font-bold  " >Register</h2>
        <div className=" justify-center items-center  m-4 p-4      ">
        <form  className="grid m-4 justify-center border p-10 font-sans   ">
            <label htmlFor="login" className="font-bold">Username</label>
            <input type="Username" placeholder="Username*" className="border m-2 p-2 w-96" />
            <label htmlFor="password" className="font-bold" >Password</label>
            <input type="password" name="password" id="password" placeholder="Password*" className="border m-2 mb-4 p-2 " />
            <div className="border m-1 p-1">
                <fieldset>
                    {/* for gender */}
                <legend>What gender are you?   </legend>
           <div className="grid grid-cols-3 ">
           <div>
            <label htmlFor="gender"  className="m-2" value="male">male</label>
            <input type="radio" name="gender" id="gender" />
            </div>
            <div>
            <label htmlFor="gender" className="m-2" value="female">female</label>
            <input type="radio" name="gender" id="gender" />
            </div>
           <div>
           <label htmlFor="gender" className="m-2"  value="idk">I identify as... </label>
            <input type="radio" name="gender" id="gender" />  
           </div>
           </div>
                </fieldset>
            </div>
            
            <Link to="/error" className="border hover:ring-2 bg-primary text-center text-white p-2 text-xl">Create Account</Link>
            
        </form>
        </div>
    </div>
    </>
}
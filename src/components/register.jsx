export default function Register(){
    return <>
     
     <div className="">
        <h2 className="text-2xl m-2 p-4 text-center bg-light " >Register</h2>
        <div className=" justify-center items-center flex m-4 p-4">
        <form  className="grid m-4 justify-center border p-10 font-sans  ">
            <label htmlFor="login" className="font-bold">Username</label>
            <input type="Username" placeholder="Username*" className="border m-2 p-2 w-96" />
            <label htmlFor="password" className="font-bold" >Password</label>
            <input type="password" name="password" id="password" placeholder="Password*" className="border m-2 mb-4 p-2 " />
            <button className="border hover:ring-2 bg-primary text-white p-2 text-xl">Create Account</button>
            
        </form>
        </div>
    </div>
    </>
}
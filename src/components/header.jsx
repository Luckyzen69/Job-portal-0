import React from "react";
import { Link } from "react-router-dom";
export default function Header() {

    return (<>
    <header>
      {/* Creating top banner  */}
      <div className="flex justify-between m-2 p-2 text-primary ">
        <Link to="/home" className=" font-mono font-bold text-3xl ">JobsPortal</Link>
        <div className=" flex flex-wrap gap-px text-xl">
   
          <Link to="/login" className="mt-3 mr-4 hover:text-black">Login</Link>

        <Link to="/PostaJob" className="border border-1 rounded-md p-2 bg-primary text-white hover:bg-red-600 m-0  ">Post a Job</Link>
        </div>
      </div>
    </header>
    </> 
    );
}
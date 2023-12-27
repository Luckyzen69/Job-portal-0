import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation
 
    
    return (<>
    <header>

      {/* Creating top banner  */}
      <div className="flex justify-between m-2 p-2 text-primary ">


        {/*  using tooltip to hover in logo  */}
        <div>
        <Link to="/home" className=" font-mono font-bold text-3xl has-tooltip hover:text-pink  ">JobsPortal <span className="tooltip rounded shadow-lg p-1 font-normal mt-8 text-sm text-yellow">go to home</span></Link>
        <Link to="/FAQ" className=" hover:text-pink" >FAQ</Link> 
        <p>{location?.state?.id}</p>
        </div>
        <div className=" flex flex-wrap gap-px text-xl">
         
          <Link to="/charts" className="mt-3 ml-10 sm:mr-2 hover:text-pink ">Charts</Link>
    <Link to="/login" className="mt-3 sm:mr-4 ml-3 hover:text-pink">Login</Link>
      <Link to="/register" className="border border-1 rounded-md p-2 ml-1 bg-primary text-white hover:bg-pink  ">Register</Link>
      
        </div>
      </div>
    </header>
    </> 
    );
}
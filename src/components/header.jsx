import React from "react";
import { Link } from "react-router-dom";
// import {useDispatch,useSelector} from 'react-redux'

export default function Header() {

    //  const dispatch = UseDispatch();
    //  const {user,loading} = useSelector(state =>state.auth)
    return (<>
    <header>
      {/* Creating top banner  */}
      <div className="flex justify-between m-2 p-2 text-primary ">
        {/*  using tooltip to hover in logo  */}
        <div>
        <Link to="/home" className=" font-mono font-bold text-3xl has-tooltip hover:text-pink  ">JobsPortal <span className="tooltip rounded shadow-lg p-1 font-normal mt-8 text-sm text-yellow">go to home</span></Link>
        <Link to="/FAQ" className=" hover:text-pink" >FAQ</Link> 
        </div>
        <div className=" flex flex-wrap gap-px text-xl">
          {/* {user ? (
            <div>
            <span>cart</span>
           <Link to="/home">
            <figure> 
            <img src={user.avatar} alt={user && user.name} className="rounded-circle" />
            </figure>
            <span> {user.name}</span>
            </Link>
            </div>
          ): !loading && ( 
            
          )} */}
          <Link to="/charts" className="mt-3 ml-10 sm:mr-2 hover:text-pink ">Charts</Link>
          <Link to="/login" className="mt-3 sm:mr-4 ml-3 hover:text-pink">Login</Link>
            <Link to="/register" className="border border-1 rounded-md p-2 ml-1 bg-primary text-white hover:bg-pink  ">Register</Link>
      
        </div>
      </div>
    </header>
    </> 
    );
}
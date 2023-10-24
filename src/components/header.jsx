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
        <Link to="/home" className=" font-mono font-bold text-3xl has-tooltip ">JobsPortal <span className="tooltip rounded shadow-lg p-1 font-normal mt-8 text-sm text-yellow">go to home</span></Link>
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
          <Link to="/login" className="mt-3 mr-4 hover:text-black">Login</Link>
            <Link to="/PostaJob" className="border border-1 rounded-md p-2 bg-primary text-white hover:bg-red-600 m-0  ">Post a Job</Link>
      
        </div>
      </div>
    </header>
    </> 
    );
}
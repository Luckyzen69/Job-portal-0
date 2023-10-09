import React from "react";
export default function Header() {
    return (<>
    <header>
      {/* Creating top banner  */}
      <div className="flex justify-between m-2 p-2 text-primary ">
        <h1 className=" font-mono font-bold text-3xl ">JobsPortal</h1>
        <div className=" flex flex-wrap gap-px text-xl">
        <button className="hover:text-black">login</button>
        <button className="border border-1 rounded-md p-2 bg-primary text-white hover:bg-red-600 m-0  ">Post a Job</button>
        </div>
      </div>
    </header>
    </> 
    );
}
import React from "react"
import Star from "../assets/starmall.png"
export default function Banner() {
    return (
        <>
         <div className="bg-light lg:grid-cols-1 flex justify-between relative overflow-hidden coveer ">
      <div className="m-11 p-10">
        {/* Adding text to Banner  */}
        <h2 className=" text-7xl  tracking-wide font-bold" >
        Find<span className="text-primary tracking-wide	"> Job</span> That <br />  <span className="text-primary tracking-wide	">Matches </span>  Your <br /> Passion
        </h2>
        <p className="text-third">Hand-picked opportunities to work from home, remotely, freelance,<br /> full-time, part-time, contract and internships.</p>
        <div className="relative">
          <br />
          {/* adding search bar  */}
          <input type="search" name="search " id="search" className="border-2 p-2 w-96 " placeholder="Search by job title..." />
          <label htmlFor="search"  className="bg-primary rounded p-2 absolute left-80 bottom-0 top-6 text-white hover:bg-red-500">Search</label>
        </div>
      </div> 
      {/*  adding image  */}
      <img src={Star} alt="" className=" me absolute"  />  
    </div>
        </>
    )
    
}
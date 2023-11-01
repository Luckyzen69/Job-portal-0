import React, { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./searchbar";
import  SearchResultList from "./searchresultlist";
export default function Banner() {
 
  const [results,setResults] = useState([])
    return (
        <>
         <div className=" lg:grid-cols-1 flex justify-between relative overflow-hidden  bg-light  bg-luffy  h-screen w-auto bg-no-repeat bg-fixed bg-center sm:bg-right lg:bg-right">
      <div className="m-11 p-10 ">
        {/* Adding text to Banner  */}
        <h2 className=" text-7xl  tracking-wide font-bold sm:text-lightpurple text-lighpurple md:text-black lg:text-black" >
        Find<span className="text-primary tracking-wide	"> Job</span> That <br />  <span className="text-primary tracking-wide	">Matches </span>  Your <br /> Passion
        </h2>
        <p className="text-third">Hand-picked opportunities to work from home, remotely, freelance,<br /> full-time, part-time, contract and internships.</p>
        <SearchBar className="flex" setResults={setResults}/>
        <SearchResultList className="flex" results={results}/>
      </div> 
      {/*  adding image  */}
      {/* <img src={Star} alt="" className=" me absolute"  />   */}
    </div>
        </>
    )
    
} 
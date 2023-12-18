import React, { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../search/searchbar";
import  SearchResultList from "../search/SearchResultlist";
export default function Banner() {
 
  const [results,setResults] = useState([])
    return (
        <>
         <div className= " relative   bg-light  bg-luffy p-2   bg-no-repeat w-full sm:bg-right bg-center bg-">
      <div className="sm:m-11 p-10 ">
        
        {/* Adding text to Banner  */}
        <h2 className=" text-6xl  tracking-wide font-bold sm:text-lightpurple text-green md:text-black lg:text-black" >
        Find<span className="text-primary tracking-wide	"> Job</span> That <br />  <span className="text-primary tracking-wide	">Matches </span>  Your <br /> Passion
        </h2>
        <p className="text-third">Hand-picked opportunities to work from home, remotely, freelance,<br /> full-time, part-time, contract and internships.</p>
        <SearchBar className="flex " setResults={setResults}/>
        <SearchResultList className="flex" results={results}/>
      </div> 
    </div>
        </>
    )
    
} 
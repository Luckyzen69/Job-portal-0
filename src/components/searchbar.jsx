
import React from "react";
 import { useState } from "react";

export const   SearchBar = ({ setResults  }) => {
    const [input,setInput] = useState("");
  const fetchApiData = value =>{
          fetch("https://mocki.io/v1/627d97a8-b073-4479-b18f-24e7400af486")
          .then((response) => response.json())
          .then((json)=>{
            const results =  json.jobs.filter((job)=> {
                return value && 
                job.title.toLowerCase().includes(value)
            });
            setResults(results); 
          });
};
     
const handleChange =(value)=>{
    setInput(value);
    fetchApiData(value);  
    }
    return<>
    <div>
    <div className="relative">
          <br />
          {/* adding search bar  */}
          <input type="search" value={input} onChange={(e)=> handleChange(e.target.value)} className="border-2 p-2 w-96 " placeholder="Search by job title..." />
          <button htmlFor="search"  className="bg-primary rounded p-2 absolute left-80 bottom-0 top-6 text-white hover:bg-red-500">Search</button>
        </div>
    </div>
    </>
}
export default  SearchBar
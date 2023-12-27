import { useState } from "react";
import React from "react";
import { MdPersonSearch } from "react-icons/md";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";


 export default function SingleQuestion({title,info}){
    const [ showInfo,setShowInfo] = useState(false);
    return <>
   <div className="border border-collapse m-2 p-2 relative font-sans text-slate-800  bg-ligtpink">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <button className="flex absolute top-3 right-4 text-2xl hover:ring-2 rounded-full font-sans" onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <IoIosArrowUp/>:<IoIosArrowDown/>}
            </button>
          </div >
          <div className="bg-white">
            {showInfo && <p>{info   }</p>}
          </div>
   </div>
    </>
}
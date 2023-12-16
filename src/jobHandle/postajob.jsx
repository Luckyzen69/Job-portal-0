import { Link } from "react-router-dom"
import React from "react"
import { useEffect } from "react";

export default function PostaJob({setProgress}){
    useEffect(()=>{
        setProgress(30);
        setTimeout(()=>{
            setProgress(100)
        },1000);
    },[]);
    return<>
    <h1 className="text-center text-2xl m-1 p-2 bg-light"> Create a Job</h1>
    <div className="flex justify-center border   font-sans capitalize ">
    <form className="capitalized   ">
        {/* making individual div for each input type */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
            {/* for company name and website input */}
          <div >                               
        <label htmlFor="Name"className="font-semibold m-1">company name</label>
        <input type="text" className="border flex w-42 ml-4 lg:w-72 mt-2 mb-2 rounded p-1"/>
        </div>
        <div>
        <label htmlFor="Name"className="font-semibold ml-4">company website</label>
        <input type="text"className="border flex w-42 ml-2 p-1 rounded lg:w-72  mt-2 mb-2" />
          </div>
        </div>
          {/* for job title */}
        <div >
            <label htmlFor="title"className="font-semibold m-1 ">Job Title</label>
            <input type="title" className="border flex lg:w-11/12 rounded p-1 mt-2 mb-2" />
        </div>
                  {/* for job category anf types */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2">               
               <div>
            <label htmlFor=""className="font-semibold">Job Category</label>
           <select name="category" id="" className="border p-1 m-1  flex lg:w-72 mt-2 mb-2">
           <option value="job category" className="hidden">Job Category</option>
            <option value="#">SEO manager</option>
            <option value="#" className="border">Programmer</option>
            <option value="#">Designer</option>
           </select>
           </div>

           <div>
            <label htmlFor="choice" className="ml-4 font-semibold">Job Type</label>
            <select name="choice" className="border p-1 m-1 ml-4 lg:w-72 flex mt-2 mb-2">
                <option value="job types" className="hidden">Job Type</option>
                <option value="part time">Part Time</option>
                <option value="full time">Full Time</option>
                <option value="full time">Intern</option>
                
            </select> 
        </div>
        </div>

                {/* for Job location and salary range */}
     <div className="grid sm:grid-cols-1 md:grid-cols-2">
     <div>
            <label htmlFor=""className="font-semibold">Job Location</label>
            <input type="text"  placeholder="Location" className="border m-1 p-1 mt-2 mb-2 flex lg:w-72"/>
            </div>

            <div>
            <label htmlFor="number"className="font-semibold">Salary Range</label>
            <input type="number" placeholder="Salary Range" className="border flex lg:w-72 mt-2 mb-2 m-1 p-1"/>
        </div>
        </div>
          {/*  for experience and qualification */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
      <div>
            <label htmlFor="text"className="font-semibold">Experience</label>
            <input type="text"  placeholder="Experience" className="border m-1 p-1 lg:w-72 mt-2 mb-2 flex"/>
            </div>

            <div>
            <label htmlFor="text" className="font-semibold">Qualification</label> 
            <input type="text" placeholder="Qualification" className="border m-1 p-1 lg:w-72 ml-2 mb-2 flex"/>
        </div>
      </div>
              
                            {/* for job application deadline and links */}
        <div>
            <label htmlFor="date"className="font-semibold" >Job Application deadline  </label>
            <input type="date" className="border flex m-1 p-1 lg:w-96 mb-2 mt-2" placeholder=" Application deadline" />
        </div>
        <div>
            <label htmlFor="url" className="font-semibold">Job Application link url  </label>
            <input type="url" className="border flex m-1 p-1 lg:w-96 mt-2 mb-2" placeholder="job Application link url" />
        </div>
        <div className="grid">
            <label htmlFor="discription" className="font-semibold">job discription  </label>
            <textarea name="discription" cols="60" rows="10" placeholder="Job Discription" className="border cursor-text m-1 p-1  flex"></textarea>
        </div>
        <div className="grid text-start justify-end">
        <Link to="/error" className="bg-primary m-2 p-2  rounded flex  text-start ">Post Job</Link>
        </div>
    </form>
    </div>
    </>
}
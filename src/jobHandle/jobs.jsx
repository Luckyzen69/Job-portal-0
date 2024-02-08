import React, { useEffect } from "react";
import A from "../assets/A.png"
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { useState } from "react";


let jobs = [ 
    { 
      "company":"Apple",
      "work":"Fresher UI/UX Designer (3 Year Exp.)",
      "location":"putalisadak",
      "time":"full time",
      "salary":"Rs35000"
    },
    { 
      "company":"Microsoft",
      "work":"Fresher UI/UX Designer (3 Year Exp.)",
      "location":"Manhunt",
      "time":"part time",
      "salary":"Rs25000"
    },
    { 
      "company":"Google",
      "work":"Fresher UI/UX Designer (3 Year Exp.)",
      "location":"putalisadak",
      "time":"full time",
      "salary":"Rs45000"
    },
    { 
      "company":"Amazone",
      "work":"Fresher UI/UX Designer (3 Year Exp.)",
      "location":"putalisadak",
      "time":"full time",
      "salary":"Rs55000"
    },
    { 
      "company":"Meta",
      "work":"Fresher UI/UX Designer (3 Year Exp.)",
      "location":"putalisadak",
      "time":"full time",
      "salary":"Rs85000"
    },
    { 
      "company":"Mindrisers ",
      "work":"Full Stack Developer (3 Year Exp.)",
      "location":"putalisadak",
      "time":"full time",
      "salary":"Rs85000"
    },
  ]
  

export default function Jobs() {
  
    return <>
    <div>
    <div>
      <p className="font-poppins font-bold text-center text-2xl">All Popular Listed jobs</p>
      <div key={jobs} className="jobs ">{
        jobs.map((job,index)=>{
          let {company,work,location,time,salary}= job
          return <div key={index} className="jobs  border-2 relative m-1 sm:m-4 ring-black-2 hover:ring-4 grid grid-rows-2 sm:flex ">
            <img src={A} alt="" className="border-2 h-24" />
          <div className="absolute top-0 right-0 left-28 font-sans flex-auto">
            <p>{company}</p>
            <p className="font-bold ">{work}</p>
            <div className="flex "> 
            <p className="mr-2 flex"><MdLocationPin className="mt-1 text-teal-700"/>{location}</p>
            <p className="mr-2 flex"><IoIosTime className="mt-1 text-teal-700"/>{time}</p>
            <p className="flex"><MdAttachMoney className="mt-1 text-xl text-teal-700"/>{salary}</p>
            <Link to="/details" className="border-2  top-32 absolute sm:top-0 sm:right-0 sm:mt-5 text-white capitalize font-sans hover:ring-2 rounded-lg p-4 bg-primary ">view details</Link>
            </div>
          </div>
          </div>
        })
      }


      </div>
    </div>
    <div className="flex items-center justify-center">
    {
      <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div class="flex flex-1 justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
        <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span class="sr-only">Previous</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </a>
            {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
            <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-teal-700 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:lighteal-700">1</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
           
            <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span class="sr-only">Next</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
    }
    </div>
    </div>
    </>
}
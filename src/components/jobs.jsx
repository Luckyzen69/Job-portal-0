import React from "react";
import A from "../assets/A.png"

let jobs = [ 
    { 
      "company":"Apple",
      "work":"Fresher UI/UX Designer (3 Year Exp.)",
      "location":"putalisadak",
      "time":"full time",
      "salary":"Rs25000"
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
      "salary":"Rs25000"
    },
    { 
      "company":"Amazone",
      "work":"Fresher UI/UX Designer (3 Year Exp.)",
      "location":"putalisadak",
      "time":"full time",
      "salary":"Rs25000"
    },
    { 
      "company":"Meta",
      "work":"Fresher UI/UX Designer (3 Year Exp.)",
      "location":"putalisadak",
      "time":"full time",
      "salary":"Rs25000"
    },
  ]
  

export default function Jobs() {
    return <>
    <div>
      <p className="font-poppins font-bold text-center text-2xl">All Popular Listed jobs</p>
      <div key={jobs} className="jobs ">{
        jobs.map((job,index)=>{
          let {company,work,location,time,salary}= job
          return <div key={jobs} className="jobs  border-2 relative m-4 ring-black-2 hover:ring-4"><img src={A} alt="" className="border-2 h-24" />
          <div className="absolute top-0 right-0 left-28 font-sans">
            <p>{company}</p>
            <p className="font-bold ">{work}</p>
            <div className=" flex"> 
            <p className="mr-2 ">{location}</p>
            <p className="mr-2">{time}</p>
            <p>{salary}</p>
            <button className="border-2 absolute top-0 right-0 mt-5 text-white capitalize font-sans hover:ring-2 rounded-lg p-4 bg-primary">view details</button>
            </div>
          </div>
          </div>
        })
      }

      </div>
    </div>
    </>
}
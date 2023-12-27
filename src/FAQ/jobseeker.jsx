import FAQbanner from "./FAQbanner"
import { Link } from "react-router-dom"
import JobseekerData from "./JobseekerData"
import { useState } from "react"
import SingleQuestion from "./SingleQuestion"

export default function Jobseekers(){
    const [ JobseekerQuestions,setJobseekerQuestions ] = useState(JobseekerData)
return<>
<FAQbanner/>
    <div className="flex  bg-lightpink ">
        <Link to="/jobseekers">
        <div className="border rounded p-4 bg-job bg-cover hover:ring-2 m-1">
            <p className="font-bold">Jobseekers</p>
        </div>
        </Link>
        <Link to="/employers">
        <div className="border rounded p-4  bg-recuitment bg-cover hover:ring-2 m-1" >
            <p className="font-bold ">Employers</p>
        </div>
        </Link>
    </div>
        <h1 className="font-bold bg-lightpink  text-center justify-center items-center flex text-2xl">Jobseekers</h1>
        <div>
            
            <div className="grid grid-cols-1 text-start sm:grid-cols-2">
                {JobseekerQuestions.map((JobseekerQuestion)=>{
                return <SingleQuestion key={JobseekerQuestion} {...JobseekerQuestion} />
                })}
            </div>
        </div>
</>
}
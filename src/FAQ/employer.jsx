import FAQbanner from "./FAQbanner"
import { Link } from "react-router-dom"
import SingleQuestion from "./SingleQuestion"
import EmployerData from "./EmployerData"
import { useState } from "react"

export default function Employers(){
    const [ EmployerQuestions, setEmployerQuestions] = useState(EmployerData)
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
        <h1 className="bg-lightpink text-2xl font-bold flex justify-center">Employers</h1>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 text-start">
                {EmployerQuestions.map((EmployerQuestion) => {
                    return <SingleQuestion key={EmployerQuestion.id} {...EmployerQuestion}  />
                })}
            </div>
        </div>
    </>
    }
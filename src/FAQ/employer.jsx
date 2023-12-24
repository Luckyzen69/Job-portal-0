import FAQbanner from "./FAQbanner"
import { Link } from "react-router-dom"

export default function Employers(){
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
    </>
    }
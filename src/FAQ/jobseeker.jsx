import FAQbanner from "./FAQbanner"
import { Link } from "react-router-dom"

export default function Jobseekers(){
return<>
<FAQbanner/>
    <div className="flex m-2  ">
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
</>
}
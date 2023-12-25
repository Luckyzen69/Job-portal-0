import { RiUserSearchLine } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import FAQbanner from "./FAQbanner";
import { MdPersonSearch } from "react-icons/md";

export default function FAQ(){
    return<>
    <FAQbanner/>
    <p className="text-xl text-gray-600 text-center bg-light p-4 font-mono">Please share your identity for assistance</p>
        {/*  Role wise questions */}
    <div className="flex justify-center m-4 ">
        <div className="border m-4 p-4 flex-row items-center list-outside hover:shadow-xl border-sky-600">
        <Link to="/jobseekers">
            <RiUserSearchLine size={34} color="#5B7FFF" className=" m-4 float-left" />
            <h2 className="font-bold text-sky-600 text-xl =">JobSeeker</h2>
            <p className="text-sky-400">Looking for job, find answer  to your queries</p>
        </Link>
        </div>
        <div className="border m-4 p-4 flex-row items-center list-outside  hover:shadow-xl border-sky-900">
        <Link to="/employers">
            <HiBuildingOffice2 size={34} color="#002a5b" className="m-4 float-left"/>
            <h2 className="font-bold text-sky-900 text-xl"> Employers</h2>
            <p className="text-sky-900">All about employers account & employer services</p>
        </Link>
        </div>
    </div>
                          {/*  Main Questions */}
    <h2 className="text-gray-400 text-center font-bold text-2xl underline underline-offset-8 hover:text-gray-800"> Most Popular FAQs</h2>
    <div className="grid grid-cols-2 m-5">

    <div className="border m-2 p-2">
    <MdPersonSearch />
       <p>How much do you charge for placement?</p>
    </div>
    <div className="border m-2 p-2">
       <p>What kind of jobs should I apply to?</p>
    </div>
    <div className="border m-2 p-2">
       <p>Can someone review my resume and give me advice?</p>
    </div>
    <div className="border m-2 p-2">
       <p>How can I register my profile at merojob?</p>
    </div>
    
    </div>
    </>
}
import { RiUserSearchLine } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";


export default function FAQ(){
    return<>
    <p className="text-xl text-gray-600 text-center">Please share your identity for assistance</p>
        {/*  Role wise questions */}
    <div className="flex justify-center m-4 ">
        <div className="border m-4 p-4 flex-row items-center list-outside hover:shadow-xl border-sky-600">
            <RiUserSearchLine size={34} color="#5B7FFF" className=" m-4 float-left" />
            <h2 className="font-bold text-sky-600 text-xl =">JobSeeker</h2>
            <p className="text-sky-400">Looking for job, find answer  to your queries</p>
        </div>
        <div className="border m-4 p-4 flex-row items-center list-outside  hover:shadow-xl border-sky-900">
            <HiBuildingOffice2 size={34} color="#002a5b" className="m-4 float-left"/>
            <h2 className="font-bold text-sky-900 text-xl"> Employers</h2>
            <p className="text-sky-900">All about employers account & employer services</p>
        </div>
    </div>
                          {/*  Main Questions */}
    <h2 className="text-gray-400 text-center font-bold text-2xl underline underline-offset-8 hover:text-gray-800"> Most Popular FAQs</h2>
    <div className="flex">

    <div className="border m-2 p-2">
       <p>How much do you charge for placement?</p>
    </div>
    
    </div>
    </>
}
import { RiUserSearchLine } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import FAQbanner from "./FAQbanner";
import { useEffect } from "react";
import { useState } from "react";
import data from "./data"
import SingleQuestion from "./SingleQuestion";

export default function FAQ({setProgress}){
    useEffect(()=>{
        setProgress(30);
        setTimeout(()=>{
            setProgress(100)
        },1000);
    },[]);
    
    const [questions,setQuestions]= useState(data)
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
    
    
    
    <div className=" m-2 p-2 text-center grid  grid-cols-2 justify-center">
  
    {questions.map((question)=>{
        return <SingleQuestion  key={question.id} {...question} />;
    })}
    
    </div>
    </>
}
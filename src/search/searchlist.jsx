import React from "react";

export default function SearchList(){
    return <>
    <div>
       <table >
        <thead className="border text-center flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  font-bold text-xl ">
            <tr >
                <td>Job Title</td>
                <td>Job Discription</td>
                <td>Job Type</td>
                <td>Job Location</td>
            </tr>
        </thead>
       </table>
    </div>
    </>
}
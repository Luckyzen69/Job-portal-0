import React from "react"
import {AiOutlineEye} from 'react-icons/ai'
import {BiPencil} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
export default function Apply(){
    return <>
        <h1 className="text-center font-bold text-xl m-4"> My Jobs Lists</h1>
    <div  className="flex-cols flex justify-center items-center">
            
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Job Type</th>
                    <th>Posted Date</th>
                    <th>Deadline</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Laravel Developer</td>
                    <td>Full Time</td>
                    <td>12/06/2022</td>
                    <td>12/06/2023</td>
                    <td> 
                        <span className="flex "> <AiOutlineEye/> <BiPencil/><AiOutlineDelete/> </span>
                    </td>
                </tr>
                <tr>
                    <td>Laravel Developer</td>
                    <td>Full Time</td>
                    <td>12/06/2022</td>
                    <td>12/06/2023</td>
                    <td> 
                        <span className="flex "> <AiOutlineEye/> <BiPencil/><AiOutlineDelete/> </span>
                    </td>
                </tr>
          
            </tbody>
        </table>
    </div>
    </>
}
import Error from '../assets/error.png'
import React from 'react'
import Wano from "../assets/wano.png"

export default function Errore(){
    return<>
    <div className='flex lg:justify-center flex-wrap'>
        <div className='flex text-center items-center'>
        <p className=' text-4xl font-bold text-primary flex flex-wrap gap-2 text-center'> Page 
        <span className='text-third  flex fle-wrap'>under</span> 
        <span className='text-green flex flex-wrap'>maintainance</span>
        <span className='text-purple flex flex-wrap'>.</span>
        </p>
        </div>
        <img src={Wano} alt="Error" className=' justify-center flex  lg:h-screen'/>
        <p className='flex font-bold text-4xl  items-center  justify-center m-2 capitalize text-orange '>the page your are searching is not available for now.</p>
    </div>
    </>
}
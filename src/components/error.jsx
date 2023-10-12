import Error from '../assets/error.png'
import React from 'react'

export default function Errore(){
    return<>
    <div className='flex'>
        <img src={Error} alt="Error" className='relative h-screen justify-center flex items-center ml-32'/>
        <p className='absolute top-32 text-center left-96 text-4xl font-bold'>404 - ERROR PAGE NOT MADE</p>
    </div>
    </>
}
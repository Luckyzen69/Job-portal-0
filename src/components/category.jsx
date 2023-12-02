import React from "react";
import { Link } from "react-router-dom";
import Tech from "../assets/tech.svg"
import { GiSpiderWeb } from "react-icons/gi";

let products = [  //some infos of container 
    {
        "title": "Frontend",  
      
    }
    ,{
      "title": "Backend",

    }
    ,{
      "title": "Software Developer"
    }
    ,{
      "title": "Web Developer"
    }
    ,{
      "title": "Graphic Designer"
    }
    ,{
      "title": "Game Developer"
    }
    ,{
      "title": "Video Editor"
    }
    ,{
      "title": "App developer"
    }
    ,{
      "title": "HR Specialist"
    }
    ,{
      "title": "Scrum Master"
    }
    ]  
export default function Category(){
    return <>
    <div>
    <Link to="/error">
    <div className="  bg-title_2">
      <p className="text-center text-2xl font-bold p-4">Popular Categories</p>
      <div className="ml-14    max-lg:flex relative">
      <div className="products grid grid-flow-dense gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-10 grid-cols-1  xl:grid-cols-5"> {
            products.map( (product,index)=>{
                let {title} = product
                return <div className="product border bg-white  h-40 w-40 capitalize text-center justify-center hover:ring-2"> 
                <img src={Tech} alt="" className="border p-2 rounded-full bg-light h-12 ml-11 mr-11 mt-11 text-center " />
                <p className="font-bold mr-5 m-2">{title}</p>
                </div>
            })
        }
      </div>
      </div>
    </div>

    </Link>
    </div>
    </>
}
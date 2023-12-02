import React from "react"

export const SearchResult   = ( {result} ) => {
    return ( <>
        <div className="grid hover:bg-red-200 grid-cols-3"  onClick={(e)=> alert(`you clicked  ${result.title} located on ${result.location}`)}>
            {result.title}  <span>{result.location} </span> <span>{result.employment_type}</span>
        </div>
        </>)
}
export default SearchResult
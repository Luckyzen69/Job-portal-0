import React from "react"

export const SearchResult   = ( {result} ) => {
    return ( <>
        <div className="flex flex-col hover:bg-red-200"  onClick={(e)=> alert(`you clicked  ${result}`)}>
            {result.title}
        </div>
        </>)
}
export default SearchResult
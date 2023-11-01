import React from "react"

export const SearchResult   = ( {results} ) => {
    return ( <>
        <div className="flex flex-col"  onClick={(e)=> alert(`you clicked  ${results}`)}>
            {results.title}
        </div>
        </>)
}
export default SearchResult()
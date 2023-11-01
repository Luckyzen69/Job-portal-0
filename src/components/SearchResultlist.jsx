import React from "react"
import SearchResult from "./searchresult"
export const SearchResultList= ({results})=>{
    return <>
    <div className="flex flex-col bg-white text-blue-500 ">
    {results.map((result,id)=>{
            return <SearchResult result={result} key={id} />
        })}
    </div>
    </>
}
export default SearchResultList 
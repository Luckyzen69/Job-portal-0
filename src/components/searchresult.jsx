


export default function SearchResult(){
    return <>
    <div>
        {results.map((result,id)=>{
            return <div key={id}>{result.title} </div>
        })}
    </div>
    </>
}
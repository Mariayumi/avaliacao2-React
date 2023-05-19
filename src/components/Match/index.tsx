import axios from "axios"
import { useEffect, useState } from "react"


export default function Match(){
    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/match`).then((res: any) => {
            setMatches(res.data.sort((time1: any, time2: any, data:any) => {
                const value1 = time1.host.name;
                const value2 = time2.visitor.name;
                const date = data;
            }
            ))
        })
    })

    return(
        <>
            {matches.map((match:any)=>(
                <div className="match" key={match.id}>
                    <h4>{match.host.name} x {match.visitor.name}</h4>
                    <p className="data">{match.date}</p>
                </div>
            ))}
        </>
    )
}
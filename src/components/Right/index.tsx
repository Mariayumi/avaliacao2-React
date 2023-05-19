import { useEffect, useState } from "react";
import { useContexto } from "../../hooks";
import axios from "axios";


export default function Right(){
    const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/team`).then((res: any) => {
            setTeams(res.data.sort((time1: any, time2: any) => {
                const value1 = time1.name.toLowerCase();
                const value2 = time2.name.toLowerCase();
                return value1.localeCompare(value2);
            }
            ))
        })
    })

    return(
        <>
            <div>
                <b>
                    <h1>TIMES</h1>
                    <hr/>
                </b>
                {teams.map((team:any)=>(
                    <>
                        <p key={team.id}>{team.name}</p>
                        <hr/>
                    </>
                ))}
            </div>
        </>
    )
}
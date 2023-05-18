import { fifa } from "../../assets";
import Left from "../../components/Left";
import Right from "../../components/Right";
import "../../styles/style.css"

export default function Main(){
    return(
        <>
        <div className="navbar">
            <img src={fifa} className="logo"/>
        </div>
        <div className="container">
            <div className="coluna1"><Left/></div>
            <div className="coluna2"><Right/></div>
        </div>
        </>
    )
}
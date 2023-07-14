import { Link, useNavigate, useParams } from "react-router-dom"

const Profil=({users})=>{
    const {id} = useParams()
    const found = users.find((el,i,t)=> el.id == id)
    console.log(found)
    const navigate = useNavigate()
    return(
        <div>
            <h1>{found.name}</h1>
            <h2>{found.age}</h2>
            <button onClick={()=>navigate("/brahim")}>Home</button>
        </div>
    )
}

export default Profil
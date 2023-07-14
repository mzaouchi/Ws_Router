import { Link } from "react-router-dom"

const CardUser=({el})=>{
    return(
        <div>
            <h2><Link to={`/profil/${el.id}`}>{el.name}</Link></h2>
        </div>
    )
}

export default CardUser
import CardUser from "./CardUser"

const ListUsers=({users})=>{
    return(
        <div>
            {
                users.map((el,i,t)=> <CardUser el={el}/>)
            }
        </div>
    )
}

export default ListUsers
import { useParams } from "react-router-dom"


function Users(){
    const {username} = useParams()
    return(
        <>
        <h1>{username}</h1>
        </>
    )
}

export default Users
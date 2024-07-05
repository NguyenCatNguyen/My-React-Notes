import React, {useEffect} from 'react';
import axios from "axios"

function Home(){
    async function userFetch(){
        const {data} = await axios.get("https:jsonplaceholder.tyicode.com/users");
        console.log(data)
    }

    useEffect(() =>{
        userFetch()
    },[])

    return(<>
    <h1>Home</h1>
    <h2>dgvdsb</h2>
    </>)
}

export default Home
import React, {useEffect, useState} from 'react';
import axios from "axios"

function Home(){
    async function userFetch(){
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log({data})
    }
    // use useEff
    useEffect(() =>{
        userFetch();
    },[]);

    return(<>
    <h1>Home</h1>
    <p>This is the intro</p>
    <p>testin</p>
    </>)
}

export default Home
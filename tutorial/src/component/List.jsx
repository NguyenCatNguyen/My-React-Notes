import React from "react";

const List = ({todo, TodoDelete}) =>{
    return(
        <>
        <h2>
            {todo}
        </h2>
        <button onClick={TodoDelete}>Delete</button>
        </>
    )
}

export default List;
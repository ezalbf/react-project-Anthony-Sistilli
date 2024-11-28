import React from "react";
import { useParams } from "react-router-dom";

const Todo = ()=>{
    const { id } = useParams();
    return(
        <h2>{`This is the TODO page and TODO id: ${id}`}</h2>
    )
}

export default Todo;
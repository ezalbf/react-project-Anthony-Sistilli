import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import TodoCard from "./TodoCard";

const Todos = ()=>{
    const [todos, setTodos] = useState();

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            console.log(res.data)
            setTodos(res.data)
            // console.log(res.data)
        })
    }, [])

    return(
        <>
        {todos ?
            (<div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    todos.slice(0,10).map((todo)=>{
                        return <TodoCard key={todo.id} todo={todo}/>
                    })  
                }
            </div>)
        :(<CircularProgress/>)}
        </>
    )
}

export default Todos;
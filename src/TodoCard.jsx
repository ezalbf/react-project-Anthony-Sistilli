import React from "react";
import { useNavigate } from "react-router-dom";

const TodoCard =(props)=>{
    const { todo } = props;
    const { id, title, completed } = todo;
    const navigate = useNavigate();

    return(
        <button style={{
            backgroundColor: "grey",
            padding:"15px",
            margin: "10px",
            width: "150px"
        }} 
        onClick={navigate(`/todo/${id}`)}>
            <h3>{`Title: ${title}`}</h3>
            <h5>{`Completed: ${completed}`}</h5>
        </button>
    )
}

export default TodoCard;
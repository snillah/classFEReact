import { useState } from "react";
import { useNavigate } from "react-router";



function CommentForm ({onAddComment}) {
    const [commentText,setCommentText] =useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    // prevent the default action when the form is submitted 
    // page reload
    e.preventDefault();
    // validation
    
    onAddComment(commentText);
    setCommentText("");
    // navigate("/article")
} 
    return (
        <form onSubmit={handleSubmit}>
            <h3>Leave your Comment!</h3>
            <textarea
            value={commentText}
            onChange={(e)=>setCommentText(e.target.value)} 
            ></textarea>
            <button type="submit"> Submit Comment</button>
            </form>
    )
}

export default CommentForm;
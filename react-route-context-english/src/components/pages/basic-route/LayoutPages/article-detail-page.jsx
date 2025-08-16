import { Link, useParams } from "react-router";
import { getArticleById } from "../../../../data/articles";
import CommentForm from "./comment-form-page";
import { useState } from "react";

/*
URL path will contain : article/:articleId
Eg: /article/1
This is called path parameters
two steps to the details page : access the path params and get the artcile based on the Id 
*/

function ArticleDetailPage() {
  const { articleId } = useParams();
  // the articleId is a string value we have convert to number;
  console.log("Id", articleId);
  const article = getArticleById(articleId);
// [{id:timeStame,text:""}]
const [comments,setcomments] =useState([]);

  // if(article === undefined) instead of that
  if (!article) {
    return (
      <div>
        <h2>Article Not Found</h2>
        <Link to="/article">Return to all articles</Link>
      </div>
    );
  }

const handleAddComment = (commentText) =>{
  const newComment = {
    id:Date.now(),
    text:commentText,
  }
  setcomments([...comments,newComment]);
}



  return (
    <>
      <h1>{article?.title}</h1>
      <p>{article?.content}</p>
      <p>Word Count : {article?.wordCount}</p>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map(comment=>(
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
        <CommentForm onAddComment={handleAddComment}/>
      </div>
      <Link to="/article">Return to all articles</Link>

    </>
  );
}
export default ArticleDetailPage;

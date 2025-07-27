import React from "react"
import { getArticles } from "../../../../data/articles";
import { Link } from "react-router";


function ArticleLayout (){

    const articles = getArticles();

    // problem: what is the total word count across all articles? - using reduce

    const totalWordCount = articles.reduce((acc,cv)=> acc+cv?.wordCount,0)


    return (
        <>
        <h2>All Article </h2>
        <p>Total word count for all articles <strong>{totalWordCount}</strong></p>
        <div>
            {
                articles.map((article)=>(
                    <li key={article?.id}>
                        <Link to={`/article/${article?.id}`}>{article?.title}</Link>
                    </li>
                ))
            }
        </div>
        </>
    )
}
export default ArticleLayout;
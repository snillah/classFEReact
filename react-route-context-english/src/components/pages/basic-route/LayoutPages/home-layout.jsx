import React from "react";
import { articles, getArticles } from "../../../../data/articles";
import { Link } from "react-router";

function HomeLayout () {

    const allArticles = getArticles();

    const recentArticles = [];
    recentArticles.push(allArticles[0]);
    recentArticles.push(allArticles[1]);

    return (
        <>
            <h2>Home Page</h2>
            <div>Hi New Work</div>
            <div>
                {
                    recentArticles.map((article,index) =>{
                        return(
                            <div key={index}>
                                <h3><Link to={`/article/${article?.id}`}>{article?.title}</Link></h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomeLayout;
import { useParams } from "react-router";



function ArticleDetailPage (){
    const {articleId} = useParams()
    const article = getArticleById(articleId)
    // if(article === undefined) instead of that
    if(!article){
        return (
            <div>
                <h2>Article Not Found</h2>
                <Link to ="/article"></Link>
            </div>
        )
    }
    return (
        <>
        
        </>
    )
}
export default ArticleDetailPage;
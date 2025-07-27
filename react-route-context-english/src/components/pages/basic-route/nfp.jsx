import { Link } from "react-router";
import '../../../App.css'

function NotFoundPage () {
    return(
        <>
        <div className="page-not-found">
        <h3>Page NOT Found </h3>
        <div>404 Error</div>
        {/* <a href="/">Return to Home page</a> */}
        <Link to={{pathname:'/'}}>Return Home Page</Link>
        </div>
        </>
    )
}

export default NotFoundPage;


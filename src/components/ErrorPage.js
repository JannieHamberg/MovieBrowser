import { Link } from "react-router-dom"



const ErrorPage = () =>{
    return(
        <div className="container text-center py-5">
            <h1>
                This page does not exist
            </h1>
            <Link to="/">Go back to home page</Link>
        </div>
    )
}

export default ErrorPage
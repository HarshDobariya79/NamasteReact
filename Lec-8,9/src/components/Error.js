import { useRouteError, Link } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
            <div>
                <h1>Error</h1>
                <div>{err.data}</div>
                <Link to="/">Go back to home</Link>
            </div>
        )
}

export default Error;
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has accurred.</p>
            <p>
                <i>{error.statusText || error.massage}</i>
            </p>
        </div>
    )
}

export default ErrorPage
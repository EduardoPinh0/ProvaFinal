import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error_page">
            <h1>AUUUUU</h1>
            <p>Deu ruim amigo, irá conhecer por que minha boca é tão grande</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
};
export default ErrorPage;

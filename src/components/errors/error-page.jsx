import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <div id="error-page">
                <h1>Oops!</h1>
                <p> Sorry , the page you are looking for does not exist.</p>
            </div>
</div>
    );
}
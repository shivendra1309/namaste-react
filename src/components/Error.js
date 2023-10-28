import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h1>Ooops</h1>
            <h2>Something went wrong. Please contact Shiv!</h2>
            <h4>{error.status}: {error.statusText}</h4>
        </div>
    );
};

export default Error;
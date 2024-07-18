import { isRouteErrorResponse, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  if (isRouteErrorResponse(error)) {
    // Handle known route error responses
    console.error(`Error: ${error.status} ${error.statusText}`);
    return (
      <div>
         <h1>Oops!</h1>
         <p>Sorry, this page seems to have a propblem.</p>
        <p><i>{error.status}: {error.statusText}</i></p>
      </div>
    );
  } else if (error instanceof Error) {
    // Handle generic errors
    console.error(error.message);
    return (
      <div>
        <h1>Oops!</h1>
         <p>Sorry, we ran into an unexpected error.</p>
        <p><i>{error.message}</i></p>
      </div>
    );
  } else {
    // Handle unknown errors
    console.error('An unknown error occurred');
    return (
      <div>
        <h1>Oops!</h1>
         <p>Sorry, we ran into an unknown error occured.</p>
      </div>
    );
  }
}
 
export default ErrorPage;
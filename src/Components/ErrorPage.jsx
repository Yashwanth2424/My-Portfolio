import { useRouteError, useNavigate } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.status === 404 ? "Page Not Found" : "An unexpected error occurred."}</p>
      <button onClick={() => navigate("/", { replace: true })}>Go back to Home</button>
    </div>
  );
}

export default ErrorPage;

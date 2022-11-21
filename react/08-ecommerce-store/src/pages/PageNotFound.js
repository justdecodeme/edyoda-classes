import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>PageNotFound Page</h3>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default PageNotFound;

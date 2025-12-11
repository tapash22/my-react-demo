import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="p-6">
      <h1>Welcome to Demo Page (Not Logged In)</h1>
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
}

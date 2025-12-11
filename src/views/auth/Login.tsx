import { login } from "../../components/auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="p-6">
      <h1>Login Page</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white"
      >
        Login
      </button>
    </div>
  );
}

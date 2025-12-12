import { login } from "../../components/auth/useAuth";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/form/LoginForm";
import { loginUser } from "../../components/hooks/types/LoginUser";
import type { User } from "../../components/hooks/types/CurrentUser";

export default function Login() {
  const navigate = useNavigate();
  const { dispatch } = loginUser();

  const handleLogin = (data: User) => {
    login();
    // localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: "LOGIN", payload: data });
    navigate("/dashboard");
  };

  return <LoginForm onFormChange={handleLogin} />;
}

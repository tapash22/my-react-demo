import { login } from "../../components/auth/useAuth";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/form/LoginForm";
import type { User } from "../../components/hooks/types/CurrentUser";
import { useLoginUser } from "../../components/hooks/types/useLoginUser";

export default function Login() {
  const navigate = useNavigate();
  const { dispatch } = useLoginUser();

  const handleLogin = (data: User) => {
    login();
    dispatch({ type: "LOGIN", payload: data });
    navigate("/dashboard");
  };

  return <LoginForm onFormChange={handleLogin} />;
}

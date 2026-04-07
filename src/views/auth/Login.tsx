import { login } from "../../components/auth/useAuth";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/form/LoginForm";
import type { User } from "../../components/hooks/types/CurrentUser";
import { useLoginUser } from "../../components/hooks/types/useLoginUser";
import { useToaste } from "../../components/toaster/useToast";

export default function Login() {
  const navigate = useNavigate();
  const { dispatch } = useLoginUser();
  const { showToast } = useToaste();

  const handleLogin = (data: User) => {
    login();
    dispatch({ type: "LOGIN", payload: data });
    showToast("Login successfully!", "success");
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm onFormChange={handleLogin} />
    </div>
  );
}

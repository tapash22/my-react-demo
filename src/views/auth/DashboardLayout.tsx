import { Outlet, Link, useNavigate } from "react-router-dom";
import { logout } from "../../components/auth/useAuth";
import { useLoginUser } from "../../components/hooks/types/useLoginUser";

export default function DashboardLayout() {
  const navigate = useNavigate();
  // Dashboard
  const { user } = useLoginUser();
  console.log(user?.email);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="p-6">
      <h1>Dashboard</h1>

      <nav className="space-x-4">
        <Link to="home">Home</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <div>{user?.email}</div>
      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-500 text-white"
        >
          Logout
        </button>
        <Outlet /> {/* child pages */}
      </div>
    </div>
  );
}

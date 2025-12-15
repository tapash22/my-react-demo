import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { logout } from "../../components/auth/useAuth";
import { useLoginUser } from "../../components/hooks/types/useLoginUser";
import image from "../../assets/react.svg";

interface Page {
  name: string;
  path: string;
}

const pages: Page[] = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Profile",
    path: "profile",
  },
];

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
    <>
      <div className="h-screen w-full flex flex-col overflow-x-hidden ">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full h-24 z-50">
          <nav className="h-full w-full flex items-center justify-between bg-blue-950/80 backdrop-blur drop-shadow-xl">
            <div className="flex items-center pl-4">
              <img src={image} alt="logo" className="w-10 h-10" />
            </div>

            <div className="flex items-center gap-4 pr-4">
              {pages.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={`/${path}`}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Logout
              </button>
            </div>
          </nav>
        </header>

        {/* Header spacer */}
        <div className="h-24 shrink-0" />

        {/* Scrollable content */}
        <main className="flex-1 w-full overflow-y-auto overflow-x-hidden ">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="w-full h-24 flex items-center justify-center bg-gray-100">
          <p className="font-bold italic text-xl text-black">This is footer</p>
        </footer>
      </div>
    </>
  );
}

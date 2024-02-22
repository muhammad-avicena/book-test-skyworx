import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Navbar = () => {
  const username = sessionStorage.getItem("username");

  const handleLogout = () => {
    Cookies.remove("token");
    sessionStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Link to="/dashboard">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt="Workflow"
                />
                <span className="font-medium text-white dark:text-neutral-200">
                  Skyworx Panel
                </span>
              </Link>
            </div>
          </div>
          <div>
            <span className="text-white mr-2">
              Hi, {username ? username : "Anon"}
            </span>
            <button
              onClick={handleLogout}
              className="rounded bg-primary px-5 py-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

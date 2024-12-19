import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  // State to manage the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle the theme and save it to localStorage
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <nav className="navbar px-20 bg-base-500">
      <div className="flex-1 gap-12">
        <a className="btn btn-ghost text-xl">MovieTrack</a>

        <ul className="menu menu-horizontal">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allMovies"}>All Movies</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to={"/addMovies"}>Add Movies</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to={"/myFavourites"}>My Favorites</NavLink>
            </li>
          )}
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-none gap-8">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Log Out
          </button>
        ) : (
          <div className="space-x-6">
            <Link to="/signIn">
              <button className="btn">Sign In</button>
            </Link>
            <Link to="/signUp">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        )}

        {/* Theme toggle button */}
        <button onClick={toggleTheme} className="btn btn-ghost">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {user && (
          <div className="dropdown dropdown-end">
            <div className="btn btn-ghost btn-circle avatar relative group">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>

              {user && (
                <span className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-max bg-gray-800 text-white text-sm font-semibold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {user?.displayName}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

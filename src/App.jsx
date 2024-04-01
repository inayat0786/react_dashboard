import React, { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "./config";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound, Statistics, Orders, Login } from "./screens";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, setUser] = React.useState("");

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user?.uid);
      } else {
        setUser("");
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {user ? (
            <Route element={<BaseLayout show={user} />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
        {user && (
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
          >
            <img
              className="theme-icon"
              src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
            />
          </button>
        )}
      </Router>
    </>
  );
}

export default App;

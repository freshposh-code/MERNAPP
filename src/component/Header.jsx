import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Usercontext, UsercontextProvider } from "../context/UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(Usercontext);

  useEffect(() => {
    fetch("http://localhost:8000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:8000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <div>
      <header>
        <Link to="/" href="#" className="logo">
          MYBLOG
        </Link>
        <nav>
          {username && (
            <>
              <div className="log">
                <Link to="/CreatePost">Create new post</Link>
                <p onClick={logout}>Logout</p>
              </div>
            </>
          )}
          {!username && (
            <>
              <Link to="login">Login</Link>
              <Link to="register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}

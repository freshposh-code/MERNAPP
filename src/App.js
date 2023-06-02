import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import CreatePost from "./component/Pages/CreatePost";
import Login from "./component/Pages/Login";
import Register from "./component/Pages/Register";
import Posts from "./component/Posts";

const App = () => {
  return (
    <>
      <main>
        <Header />

        <Routes>
          <Route
            path="/"
            index
            element={
              <main>
                <Posts />
              </main>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

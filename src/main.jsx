import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { PostsContextProvider } from "./context/PostsContext.jsx";
import App from "./App.jsx";
import "./styles/index.scss";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

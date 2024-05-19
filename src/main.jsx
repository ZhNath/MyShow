import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root.jsx";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage.jsx";
import { PageNotFound } from "./views/PageNotFound.jsx";
import { TVCard } from "./views/TVCard.jsx";
import { LogInWindow } from "./views/LogInWindow.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Homepage />} />
          <Route path="filter/:id" element={<TVCard />} />
          <Route path="login" element={<LogInWindow />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import Root from "./components/Root.jsx";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage.jsx";
import { PageNotFound } from "./views/PageNotFound.jsx";
import { TVCard } from "./views/TVCard.jsx";
import { ActorCard } from "./views/ActorCard.jsx";
import { LogInWindow } from "./views/LogInWindow.jsx";
import { WatchList } from "./views/WatchList.jsx";
import { FilteredByStatusWatchList } from "./views/FilteredByStatusWatchList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="filter/:id" element={<TVCard />} />
          <Route path="actor/:id" element={<ActorCard />} />
          <Route path="login" element={<LogInWindow />} />
          <Route path="watchlist" element={<WatchList />} />

          <Route
            path="watchlist/:statfilter"
            element={<FilteredByStatusWatchList />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RootLayout from "./component/layouts/rootLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RootLayout>
      <App />
    </RootLayout>
  </React.StrictMode>
);

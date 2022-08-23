import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Components/Providers/ThemeProvider";
import { ContactProvider } from "./Components/Providers/ContactProvider";
import { ObserverProvider } from "./Components/Providers/ObserverProvider";
import { ProjectProvider } from "./Components/Providers/ProjectProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProjectProvider>
      <ObserverProvider>
        <ContactProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ContactProvider>
      </ObserverProvider>
    </ProjectProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

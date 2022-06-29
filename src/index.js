import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/themeContext";
import reportWebVitals from "./reportWebVitals";
import Background from "./components/Background";
import Toggle from "./components/themeToggle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6 z-50">
          <Toggle />
        </div>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

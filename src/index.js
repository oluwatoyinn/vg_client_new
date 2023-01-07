import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./components/DarkMode/themeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <body className="bg-white dark:bg-black">
        <Router>
          <App />
        </Router>
      </body>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

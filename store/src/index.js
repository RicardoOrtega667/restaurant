import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BasicExample from "./BasicExample";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/main";
import App from "./App";
import Footer from "./pages/footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{
      backgroundColor: 'blue'}}>
    <BasicExample />
    <Main />
    <App />
    <Footer />
    </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

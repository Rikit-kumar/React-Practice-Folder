import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider, MyApp } from "./contextApi/AppContext.jsx";
import { BrowserRouter } from "react-router";
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider store={MyApp}>
      <App />
    </ContextProvider>
    <ToastContainer position="bottom-right" autoClose={1000}/>
  </BrowserRouter>,
);

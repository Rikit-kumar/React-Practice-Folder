import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider, MyStore } from "./context/MyContext.jsx";
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <ContextProvider store={MyStore}>
    <App />
    <ToastContainer autoClose={1000}/>
  </ContextProvider>,
);

import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./contextApi/AppContext.jsx";

createRoot(document.getElementById("root")).render(

  <ContextProvider>
    <AppRoutes />
    <ToastContainer autoClose={1000}/>
  </ContextProvider>
  
);

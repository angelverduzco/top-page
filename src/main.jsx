import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DiscographyContextProvider } from "./contexts/DiscographyContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <DiscographyContextProvider>
            <App />
        </DiscographyContextProvider>
    </StrictMode>,
);

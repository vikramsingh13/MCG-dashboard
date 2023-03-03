import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ProSidebarProvider>
                <App />
            </ProSidebarProvider>
        </BrowserRouter>
    </React.StrictMode>
);

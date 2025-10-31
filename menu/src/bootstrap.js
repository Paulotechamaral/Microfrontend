import React from "react";
import { createRoot } from "react-dom/client";
import MenuApp from "./MenuApp.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";
import "./style.scss";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
    <div>
        <App />
    </div>
);

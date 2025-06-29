import { createRoot } from "react-dom/client";
import { createFromFetch } from "react-server-dom-webpack/client"; // transforms server markup into components
import "doodle.css/doodle.css";

console.log("fetching flight response");
const fetchPromise = fetch("/react-flight"); // Requests serialized component data from a server endpoint
const root = createRoot(document.getElementById("root"));
const p = createFromFetch(fetchPromise);
console.log("rendering root", p);
root.render(p);
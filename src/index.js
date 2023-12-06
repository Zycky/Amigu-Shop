import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Usado para renderizar todo el proyecto en root"
const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

import "./styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

ReactDOM.render(<App />, root);

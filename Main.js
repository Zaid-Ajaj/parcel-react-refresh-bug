import { render } from "react-dom"
import { createElement } from "react"
import { Index } from "./Components.js"

render(
    createElement(Index, null),
    document.getElementById("root")
);
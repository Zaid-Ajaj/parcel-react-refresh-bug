import { createElement, useState } from "react"

export function Counter({ initial }) {
    const [count, setCount] = useState(initial)
    return createElement("div", null,
        createElement("h1", null, count),
        createElement("button", { onClick: () => setCount(count + 1) }, "Increment")
    )
}

export function Index() {
    return createElement("div", null,
        createElement(Counter, { initial: 10 }),
        createElement(Counter, { initial: 20 })
    );
}
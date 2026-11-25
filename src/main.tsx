import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import "@fontsource-variable/dm-sans/opsz.css"
import "@fontsource/dm-mono/400.css"
import "@fontsource/dm-mono/500.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

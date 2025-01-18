import { createRoot } from "react-dom/client"
import { RecoilRoot } from "recoil"
import Router from "@/pages/Index.tsx"
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Router />
    <Analytics />
  </RecoilRoot>
)

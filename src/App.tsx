import { Analytics } from "@vercel/analytics/react"
import { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App

import { RecoilRoot } from "recoil"
import MainPage from "./pages/MainPage"
import { BrowserRouter } from "react-router-dom"

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

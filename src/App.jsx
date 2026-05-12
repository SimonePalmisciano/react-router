import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<HomePage />} />

        <Route path="chi-siamo" element={<ChiSiamo />} />

        <Route path="Prodotti" element={<Prodotti />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
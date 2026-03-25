import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<div>Favourites</div>} />
        <Route path="/country/:name" element={<div>Country Page</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
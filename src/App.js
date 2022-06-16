import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar title="e-stroi.kz" sx={{ mb: 2 }} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
      </Routes>
    </div>
  );
}

export default App;

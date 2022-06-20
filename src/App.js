import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";
import { StartPage } from "./pages/StartPage";

function App() {
  return (
    <div className="App">
      <NavBar title="e-stroi.kz" sx={{ mb: 2 }} />
      <Routes>
        <Route path="/" element={<Navigate to="/start" />} />
        <Route path="start" element={<StartPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
      </Routes>
    </div>
  );
}

export default App;

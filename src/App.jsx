import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeTab from "./pages/HomeTab/HomeTab";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CatalogTab from "./pages/CatalogTab/CatalogTab";
import DetailsTab from "./pages/DetailsTab/DetailsTab";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeTab />} />
        <Route path="catalog" element={<CatalogTab />} />
        <Route path="details" element={<DetailsTab />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

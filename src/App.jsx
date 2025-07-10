import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeTab from "./pages/HomeTab/HomeTab";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import CatalogTab from "./pages/CatalogTab/CatalogTab";
// import DetailsTab from "./pages/DetailsTab/DetailsTab";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const CatalogTab = lazy(() => import("./pages/CatalogTab/CatalogTab"));
const DetailsTab = lazy(() => import("./pages/DetailsTab/DetailsTab"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeTab />} />
          <Route path="catalog" element={<CatalogTab />} />
          <Route path="catalog/:id" element={<DetailsTab />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

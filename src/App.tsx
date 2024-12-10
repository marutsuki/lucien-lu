import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/about";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contact";

import IndexPage from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<GalleryPage />} path="/gallery" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;

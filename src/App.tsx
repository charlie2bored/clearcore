import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import FlavorsPage from "./pages/FlavorsPage";
import FlavorDetailPage from "./pages/FlavorDetailPage";
import StoresPage from "./pages/StoresPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full overflow-x-hidden bg-milk text-dark-brown flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flavors" element={<FlavorsPage />} />
            <Route path="/flavors/:slug" element={<FlavorDetailPage />} />
            <Route path="/stores" element={<StoresPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

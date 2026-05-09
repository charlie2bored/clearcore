import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Reveal from "./sections/Reveal";
import Products from "./sections/Products";
import Nutrition from "./sections/Nutrition";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-milk text-dark-brown">
      <Navbar />
      <main>
        <Hero />
        <Reveal />
        <Products />
        <Nutrition />
      </main>
      <Footer />
    </div>
  );
}

export default App;

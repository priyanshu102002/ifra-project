import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Room from "./components/Room";
import Shop from "./components/Shop";
import WinterShop from "./components/WinterShop";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Shop />
                <WinterShop />
                <Room />
            </main>
            <Footer />
        </>
    );
}

export default App;

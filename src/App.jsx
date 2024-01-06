import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
            </main>
        </>
    );
}

export default App;

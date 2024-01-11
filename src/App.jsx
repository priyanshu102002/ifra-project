import Layout from "./Layout";
import About from "./components/About";
import Hero from "./components/Hero";
import Room from "./components/Room";
import Shop from "./components/Shop";
import WinterShop from "./components/WinterShop";
import TableDecor from "./components/WorksPages/TableDecor";

import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route
                path=""
                element={
                    <main>
                        <Hero />
                        <Shop />
                        <WinterShop />
                        <Room />
                    </main>
                }
            />
            <Route
                path="shops"
                element={
                    <main>
                        <TableDecor />
                    </main>
                }
            />
            <Route
                path="about"
                element={
                    <main>
                        <About />
                    </main>
                }
            />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

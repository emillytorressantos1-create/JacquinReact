import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";
import Listaprodultos from "./pages/ListaProdultos/Listaprodulos";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Produltos" element={<Listaprodultos/>}/>
            </Routes>
            <Footer />
        </>
    )
}
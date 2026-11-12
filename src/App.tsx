import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";
import Listaprodutos from "./pages/ListaProdutos/Listaprodutos";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";
import DetProduto from "./pages/detPoduto/DetProduto";





export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Produtos" element={<Listaprodutos />} />
                <Route path="/detalheProduto" element={<DetProduto/>} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Admprodutos" element={<AdmProdutos />} />
                <Route path="*" element={
                    <div className="container-notfound">
                        <img
                            
                            src="https://media.istockphoto.com/id/1011294592/vector/404-error-page-not-found-vector-with-donut-graphic.jpg?s=170667a&w=0&k=20&c=YL2PUH6VknsTp1RA2xYRfI3u1wnNKcgm1AHh_iBorpU=" alt="Imagen de não encontrado" />
                    </div>
                } />
            </Routes>
            <Footer />
        </>
    )
}

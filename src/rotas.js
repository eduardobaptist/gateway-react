import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";

function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;
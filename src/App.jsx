import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formpage from "./pages/Formpage";
import Resultpage from "./pages/Resultpage";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Formpage />} />
                <Route path="/result" element={<Resultpage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
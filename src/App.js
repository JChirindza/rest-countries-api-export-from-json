import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Countries />} />
                <Route path="/country/:name" element={<Country />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;

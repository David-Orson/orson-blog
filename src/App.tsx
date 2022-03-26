// npm
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// mui
import Container from "@mui/material/Container";

// views
import Home from "./ui/views/home";
import Article from "./ui/views/article";

// components
import Navbar from "./ui/components/navbar";

function App() {
    return (
        <div className="App h-screen pt-24">
            <Router>
                <Navbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/article" element={<Article />} />
                    </Routes>
                </Container>
            </Router>
        </div>
    );
}

export default App;

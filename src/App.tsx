// npm
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

// views
import Home from "./ui/views/home";
import Article from "./ui/views/article";
import BattleToVim from "./ui/views/articles/vim/battleToVim";
import HostingThisSite from "./ui/views/articles/hosting/hostingThisSite";

// components
import Navbar from "./ui/components/navbar";

const theme = createTheme({
    typography: {
        body1: {
            fontSize: 18,
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App h-screen pt-24">
                <Router>
                    <Navbar />
                    <Container maxWidth="sm">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/article" element={<Article />} />
                            <Route
                                path="/article/vim/battle-to-vim"
                                element={<BattleToVim />}
                            />
                            <Route
                                path="/article/hosting/hosting-this-site"
                                element={<HostingThisSite />}
                            />
                        </Routes>
                    </Container>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;

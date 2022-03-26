// npm
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// views
import Home from "./ui/views/home";

// components
import Navbar from './ui/components/navbar';

function App() {
	return (
		<div className="App">
            <Router>
                <Navbar/>
				<Home />
			</Router>
		</div>
    );
}

export default App;

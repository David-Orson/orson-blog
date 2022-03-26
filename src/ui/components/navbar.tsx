// npm
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// mui
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Container sx={{ flexGrow: 1 }}>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/article">
                            Articles
                        </Button>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;

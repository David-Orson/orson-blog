// npm
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// mui
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Article = () => {
    return (
        <div>
            <Container sx={{ flexGrow: 1 }}>
                <Button
                    color="inherit"
                    component={Link}
                    to="/article/vim/battle-to-vim"
                >
                    Battle to Vim
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/article/hosting/hosting-this-site"
                >
                    Hosting this site
                </Button>
            </Container>
        </div>
    );
};

export default Article;

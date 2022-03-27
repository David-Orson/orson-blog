// npm
import React from "react";

// mui
import Typography from "@mui/material/Typography";

const Home = () => {
    return (
        <div>
            <div className="pt-4">
                <Typography variant="h2">OrsonDev</Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Welcome to my website, I just hope to use this to document
                    my journies learning more about software engineering and
                    other things that interest me.
                </Typography>
            </div>
        </div>
    );
};

export default Home;

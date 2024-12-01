import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MyApp
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button
                        component={NavLink}
                        to="/Home_1"
                        color="inherit"
                        sx={(isActive) => ({
                            color: isActive.isActive ? "yellow" : "inherit",
                            textDecoration: "none",
                        })}
                    >
                        Home_1
                    </Button>
                    <Button
                        component={NavLink}
                        to="/Home_2"
                        color="inherit"
                        sx={(isActive) => ({
                            color: isActive.isActive ? "yellow" : "inherit",
                            textDecoration: "none",
                        })}
                    >
                        Home_2
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

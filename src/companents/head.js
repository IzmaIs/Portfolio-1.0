import React from "react";
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";

export const Head = () => (
    <AppBar position="fixed">
        <Container container fixed>
            <Toolbar>
                <Typography variant="h4" >Порт фолио</Typography>
            </Toolbar>
        </Container>
    </AppBar>
)
import React, {Fragment,} from "react";
import "../app.css";
import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import {Blocks} from '../companents/Blocks'

export const About = () => {
    return (
        <Fragment>
            <Container style={{paddingTop: "9%"}}>
                <Grid container spacing={5}>
                    {Blocks.map((block) =>
                        <Grid item xs={12} sm={6} md={4} style={{position: block.position, top: "0"}} key={block.text}>
                            <Card style={{position: block.position, backgroundColor: block.backgroundColor, top: "0"}}>
                                <CardMedia style={{paddingTop: "85%"}} image={block.url}/>
                                <CardContent>
                                    <Typography align="center" variant="h5">{block.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Fragment>
    )
}
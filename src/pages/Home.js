import React, {Fragment} from "react";
import Button from '@material-ui/core/Button';
import {Container, Typography, Paper, Grid, Card, CardActions, CardMedia, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LayersIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {NavLink} from "react-router-dom";
import GoTop from "../companents/GoTop";
import Box from '@material-ui/core/Box';


export const Home = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(1)
        },
        title: {
            flexGrow: 1
        },
        mainFeaturesPost: {
            position: "relative",
            color: theme.palette.common.white,
            marginBottom: theme.spacing(4),
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        },
        overlay: {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundOverlay: "rgba(0,0,0,.3)"

        },
        But: {
            paddingRight: theme.spacing(15),
            boxShadow: "1px 3px 5px #9E9E9E"
        },
        mainFeaturesPostContent: {
            position: "relative",
            padding: theme.spacing(6),
            marginTop: theme.spacing(8)
        },
        cardMedia: {
            paddingTop: "85%",
        },
        cardContent: {
            flexGrow: 1
        },
        cardGrid: {
            marginTop: theme.spacing(8)
        }
    }))
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const classes = useStyles();

    return (
        <Fragment>
            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container style={{justifyContent:'center'}}>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography align="center" component="h1" color="inherit" gutterBottom variant="h3">
                                        Web Devoloper
                                    </Typography>
                                    <Typography component="h5" color="inherit" paragraph>
                                        ??
                                    </Typography>
                                    <Grid container style={{justifyContent:'center'}}>
                                        <NavLink style={{textDecoration: 'none'}} className="nav-link" to="/about"
                                                 exact>
                                            <Button variant="contained"  style={{justifyContent:'center'}}>
                                                ????????????????
                                            </Button>
                                        </NavLink>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth="md">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Web Blog
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            ?????????????????? ?????????????????????? ?? ?????????????????????? ???????????? ???? React
                            ?????????????????? ?????????????????????? ?? ?????????????????????? ???????????? ???? React
                            ?????????????????? ?????????????????????? ?? ?????????????????????? ???????????? ???? React
                            ?????????????????? ?????????????????????? ?? ?????????????????????? ???????????? ???? React
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={3} style={{justifyContent:'center'}}>
                                <NavLink style={{textDecoration: 'none'}} className="nav-link" to="/Left" exact>
                                    <Grid item>
                                        <Button variant="outlined">?????????? ??????????????</Button>
                                    </Grid>
                                </NavLink>
                                <NavLink style={{textDecoration: 'none'}} className="nav-link" to="/Right" exact>
                                    <Grid item>
                                        <Button variant="outlined">Right</Button>
                                    </Grid>
                                </NavLink>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={6}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Blog post.
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            Blog post.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">
                                            More
                                        </Button>
                                        <Button size="small">
                                            Open
                                        </Button>
                                        <LayersIcon/>
                                        <PlayCircleFilledIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>
                </Container>
                <Box textAlign='center'>
                <GoTop scrollStepInPx="50" delayInMs="10.50"/>
                </Box>
            </main>
        </Fragment>
    )
}
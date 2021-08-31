import React, {Fragment} from "react";
import Button from '@material-ui/core/Button';
import {Container, Typography, Paper, Grid, Card, CardActions, CardMedia, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LayersIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {NavLink} from "react-router-dom";


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
    const GoTop = (props) => {
        const [thePosition, setThePosition] = React.useState(false);

        const timeoutRef = React.useRef(null);

        React.useEffect(() => {
            document.addEventListener("scroll", () => {
                if (window.scrollY > 170) {
                    setThePosition(true)
                } else {
                    setThePosition(false);
                }
            });
            // window.scrollTo(0, 0);
        }, [])

        const onScrollStep = () => {

            if (window.pageYOffset === 0) {
                clearInterval(timeoutRef.current);
            }
            window.scroll(0, window.pageYOffset - props.scrollStepInPx);
        }

        const scrollToTop = () => {
            timeoutRef.current = setInterval(onScrollStep, props.delayInMs);

        }

        const renderGoTopIcon = () => {
            return (
                <Button color="silver" className={`go-top ${thePosition ? 'active' : ''}`} onClick={scrollToTop}>{
                    <ArrowUpwardIcon/>}
                </Button>
            )
        }
        return (
            <Fragment>
                {renderGoTopIcon()}
            </Fragment>
        )
    }
    return (
        <Fragment>
            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container justifyContent="center">
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography align="center" component="h1" color="inherit" gutterBottom variant="h3">
                                        Web Devoloper
                                    </Typography>
                                    <Typography component="h5" color="inherit" paragraph>
                                        Я
                                    </Typography>
                                    <Grid container justify="center">
                                        <NavLink style={{textDecoration: 'none'}} className="nav-link" to="/about"
                                                 exact>
                                            <Button variant="contained" color="silver" justify="center">
                                                learn more
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
                            Занимаюсь разработкой и оформлением сайтов на React
                            Занимаюсь разработкой и оформлением сайтов на React
                            Занимаюсь разработкой и оформлением сайтов на React
                            Занимаюсь разработкой и оформлением сайтов на React
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={3} justify="center">
                                <NavLink style={{textDecoration: 'none'}} className="nav-link" to="/Left" exact>
                                    <Grid item>
                                        <Button variant="outlined" color="danger">Left</Button>
                                    </Grid>
                                </NavLink>
                                <NavLink style={{textDecoration: 'none'}} className="nav-link" to="/Right" exact>
                                    <Grid item>
                                        <Button variant="outlined" color="#5bb17a">Right</Button>
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
                                        <Button size="small" color="black">
                                            More
                                        </Button>
                                        <Button size="small" color="black">
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
                <Grid className={classes.But} container justifyContent="flex-end"
                      alignItems="flex-end">
                    <GoTop scrollStepInPx="50" delayInMs="10.50"/>
                </Grid>
            </main>
        </Fragment>
    )
}
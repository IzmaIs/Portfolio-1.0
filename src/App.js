import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home,} from "./pages/Home";
import {About} from "./pages/About";
import {Head} from "./companents/head";
import {Footer} from "./companents/footer";
import {Left} from "./pages/Left";
import {Right} from "./pages/Right";

function App() {
    return (
        <BrowserRouter>
            <Head/>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/about'} exact component={About}/>
                <Route path={'/Left'} exact component={Left}/>
                <Route path={'/Right'} exact component={Right}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

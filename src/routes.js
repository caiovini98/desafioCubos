import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Filme from './pages/Filme';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/detalhes/:id" exact component={Filme} />
            </Switch>
        </BrowserRouter>
    )
}

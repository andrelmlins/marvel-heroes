import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeroeScreen from './screens/heroe/HeroeScreen';
import HeroesScreen from './screens/heroes/HeroesScreen';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HeroesScreen} />
            <Route path="/heroes" component={HeroesScreen} />
            <Route path="/hero/:heroeId" component={HeroeScreen} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
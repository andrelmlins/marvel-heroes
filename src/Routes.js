import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeroeScreen from './screens/heroe/HeroeScreen';
import HeroesScreen from './screens/heroes/HeroesScreen';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HeroesScreen} />
            <Route exact path="/heroes" component={HeroesScreen} />
            <Route path="/heroes/:heroId" component={HeroeScreen} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
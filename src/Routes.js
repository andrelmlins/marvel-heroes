import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeroScreen from './screens/hero/HeroScreen';
import HeroesScreen from './screens/heroes/HeroesScreen';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HeroesScreen} />
            <Route exact path="/heroes" component={HeroesScreen} />
            <Route path="/heroes/:heroId" component={HeroScreen} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
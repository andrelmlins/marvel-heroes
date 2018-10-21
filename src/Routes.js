import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeroScreen from './screens/hero/HeroScreen';
import HeroesScreen from './screens/heroes/HeroesScreen';
import HeroesSearchScreen from './screens/heroes-search/HeroesSearchScreen';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HeroesScreen} />
            <Route exact path="/heroes" component={HeroesScreen} />
            <Route exact path="/heroes/search" component={HeroesSearchScreen} />
            <Route path="/heroes/:heroId" component={HeroScreen} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
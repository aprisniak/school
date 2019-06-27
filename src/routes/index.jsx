import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './home/Home';
import { Signin } from './signin/Signin';
import { Signup } from './signup/Signup';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
        </Switch>
    );
}

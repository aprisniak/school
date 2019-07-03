import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './home/Home';
import { SignIn } from './signin/SignIn';
import { SignUp } from './signup/SignUp';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    );
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Utils
import { PrivateRoute } from '../components/private-route/PrivateRoute';

import { Home } from './home/Home';
import { Signin } from './signin/Signin';
import { Signup } from './signup/Signup';
import { Classes } from './classes/Classes';
import { Lessons } from './lessons/Lessons';
import { Video } from './video/Video';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/classes" component={Classes} />
            <PrivateRoute
                exact
                path="/lessons/:lessonHash"
                component={Lessons}
            />
            <PrivateRoute
                exact
                path="/lessons/:lessonHash/videos/:videoHash"
                component={Video}
            />
            {/* keynotes/id */}
        </Switch>
    );
}

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { ButtonAppBar } from '../button-app-bar/ButtonAppBar';
import { Routes } from '../../routes';

class App extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <ButtonAppBar />
                    <Routes />
                </Container>
            </Router>
        );
    }
}

export default App;

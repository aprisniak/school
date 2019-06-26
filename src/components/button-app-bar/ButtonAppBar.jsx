import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const LinkStyled = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const AdapterLink = React.forwardRef((props, ref) => (
    <LinkStyled innerRef={ref} {...props} />
));

export function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        School App
                    </Typography>
                    <Button
                        component={AdapterLink}
                        to="/signin"
                        color="inherit"
                    >
                        Signin
                    </Button>
                    <Button
                        component={AdapterLink}
                        to="/signup"
                        color="inherit"
                    >
                        Signup
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

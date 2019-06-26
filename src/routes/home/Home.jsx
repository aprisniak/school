import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginTop: '32px'
    }
}));

export function Home() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h5">
                    This is home page.
                </Typography>
                <Typography component="p">
                    Please, <Link to="/signin">sign in</Link> or{' '}
                    <Link to="signup">sign up</Link> to see something special.
                </Typography>
            </Paper>
        </div>
    );
}

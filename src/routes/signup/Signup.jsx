import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginTop: '32px',
    },
}));

export const SignUp = () => {
    const [inputs, setInputs] = useState({});
    const classes = useStyles();

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <Card className={classes.root}>
            <Typography variant="h5" component="h5">
                Register
            </Typography>
            <form
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    console.log(inputs);
                }}
            >
                <CardContent>
                    <TextField
                        fullWidth
                        label="Email"
                        margin="dense"
                        required
                        variant="outlined"
                        type="text"
                        name="email"
                        onChange={event => handleInputChange(event)}
                        defaultValue=""
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        margin="dense"
                        required
                        variant="outlined"
                        type="password"
                        name="password"
                        onChange={e => handleInputChange(e)}
                        defaultValue=""
                    />
                </CardContent>
                <CardActions>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Sign In
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

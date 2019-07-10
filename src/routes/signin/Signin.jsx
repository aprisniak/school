// Core
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Instruments
import { URL } from '../../settings';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginTop: '32px'
    }
}));

export const Signin = ({ history }) => {
    const [user, setInputs] = useState({});
    const classes = useStyles();

    const handleInputChange = event => {
        event.persist();
        const { name, value } = event.target;

        setInputs(user => ({
            ...user,
            [name]: value
        }));

        console.log(user);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const response = await fetch(`${URL}/login`, {
                method: 'POST'
            });

            if (!response === 201) {
                throw new Error('can not create user');
            }

            const { data } = await response.json();

            console.log(data);

            history.push('/classes');
        } catch ({ message }) {
            console.error('Create user:', message);
        }
    };

    return (
        <Card className={classes.root}>
            <Typography variant="h5" component="h5">
                Log In
            </Typography>
            <form autoComplete="off" onSubmit={handleSubmit}>
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

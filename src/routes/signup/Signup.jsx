import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

// Instruments
import { URL } from '../../settings';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginTop: '32px'
    },
    group: {
        margin: theme.spacing(1, 0)
    }
}));

export const Signup = ({ history }) => {
    const [user, setInputs] = useState({});
    const classes = useStyles();

    const handleInputChange = event => {
        event.persist();
        const { name, value } = event.target;

        setInputs(user => ({
            ...user,
            [name]: value
        }));
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const response = await fetch(`${URL}/users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
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
                Register
            </Typography>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <CardContent>
                    <TextField
                        fullWidth
                        label="Full Name"
                        margin="dense"
                        required
                        variant="outlined"
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                        defaultValue=""
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        margin="dense"
                        required
                        variant="outlined"
                        type="text"
                        name="email"
                        onChange={handleInputChange}
                        defaultValue=""
                    />
                    <TextField
                        fullWidth
                        label="Phone"
                        margin="dense"
                        required
                        variant="outlined"
                        type="text"
                        name="phone"
                        onChange={handleInputChange}
                        defaultValue=""
                    />
                    <RadioGroup
                        name="gender"
                        onChange={handleInputChange}
                        className={classes.group}
                        required
                    >
                        <FormLabel required component="legend">
                            Gender
                        </FormLabel>
                        <FormControlLabel
                            value="f"
                            control={<Radio required color="primary" />}
                            label="Female"
                        />
                        <FormControlLabel
                            value="m"
                            control={<Radio required color="primary" />}
                            label="Male"
                        />
                    </RadioGroup>
                    <TextField
                        fullWidth
                        label="Password"
                        margin="dense"
                        required
                        variant="outlined"
                        type="password"
                        name="password"
                        onChange={handleInputChange}
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
                        Sign Up
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

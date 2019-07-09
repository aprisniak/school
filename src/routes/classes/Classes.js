import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { ClassCard } from '../../components/class-card/ClassCard';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: '32px'
    }
}));

export const Classes = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            {[0, 1, 2, 3, 4].map(value => (
                <Grid key={value} item xs={3}>
                    <ClassCard />
                </Grid>
            ))}
        </Grid>
    );
};

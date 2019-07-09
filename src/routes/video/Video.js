import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: '32px'
    }
}));

export const Video = () => {
    const { root } = useStyles();

    return (
        <div className={root}>
            <video
                controls
                width="100%"
                preload="auto"
                src="https://www.youtube.com/embed/8aGhZQkoFbQ"
            />
        </div>
    );
};

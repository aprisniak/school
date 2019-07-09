import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MovieIcon from '@material-ui/icons/Movie';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    link: {
        textDecoration: 'none'
    }
}));

export const LessonDetails = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <MovieIcon />
                    </Avatar>
                </ListItemAvatar>
                <Link className={classes.link} to="/lessons/nodejs/videos/1">
                    <ListItemText primary="Video" secondary="Jan 9, 2014" />
                </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <InsertDriveFileIcon />
                    </Avatar>
                </ListItemAvatar>
                <Link className={classes.link} to="/lessons/nodejs/keynotes/1">
                    <ListItemText primary="Keynotes" secondary="Jan 7, 2014" />
                </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};

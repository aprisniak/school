import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { LessonDetails } from '../../components/lesson-details/LessonDetails';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: '32px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    },
    expansionPanel: {
        marginTop: '16px'
    }
}));

export const Lessons = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                NodeJS
            </Typography>
            <ExpansionPanel className={classes.expansionPanel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        Lesson 1
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <LessonDetails />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>
                        Lesson 2
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <LessonDetails />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

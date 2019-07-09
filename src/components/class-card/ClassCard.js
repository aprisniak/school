import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

const AdapterLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} {...props} />
));

export const ClassCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    NodeJS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Node.js® is a JavaScript runtime built on Chrome's V8
                    JavaScript engine.
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    component={AdapterLink}
                    to="/lessons/nodejs"
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    grid: {
        position: 'relative',
        // zIndex: 3,
        margin: '0 -15px !important',
        // width: 'unset',
    }
});

export default function GridContainer(props) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

import { makeStyles, Theme } from '@material-ui/core';
import { StyleProps } from './Language';

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    root: props => ({
        borderRadius: '4px',
        color: props.color,
        height: '30px',
        width: '70px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0px 3px',
        cursor: 'pointer',
        justifyContent: 'space-evenly',
        '& span': {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            lineHeight: '1em',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }),
    dropdown: () => ({
        position: 'absolute',
        top: '100%',
        left: '0px',
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.white,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        marginTop: '10px',
        borderRadius: '4px',
    }),
    dropdownItem: () => ({
        display: 'flex',
        width: '90px',
        height: '52px',
        boxSizing: 'border-box',
        padding: '0px 15px',
        alignItems: 'center',
        cursor: 'pointer',
        color: theme.palette.black,
        fontWeight: 'bold',
        '&:hover': {
            color: theme.palette.orange,
        },
    }),
}));

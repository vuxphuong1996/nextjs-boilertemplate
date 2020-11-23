import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        background: '#140039',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
    },
    wrap: {
        height: '100%',
        margin: '0',
    },
    logo: {
        flex: '1 0 0',
        '& img': {
            height: '28px',
            maxWidth: '100%',
        },
    },
    desktop: {
        '& li': {
            display: 'inline-block',
            height: '89px',
            lineHeight: '89px',
            padding: '0 33px',
            '& a': {
                color: theme.palette.white,
                fontWeight: theme.typography.fontWeight.type2,
                lineHeight: theme.typography.lineHeight.type1,
                textTransform: 'uppercase',
            },
        },
    },
    language: {
        display: 'flex',
        justifyContent: 'flex-end',
        flex: '1 0 0',
    },
    mobile: {},
}));
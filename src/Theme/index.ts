import { createMuiTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 960,
            lg: 1140,
            xl: 1920,
        },
    },
    palette,
    typography
});

export default theme;

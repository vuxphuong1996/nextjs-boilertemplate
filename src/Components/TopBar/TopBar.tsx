import React from 'react';
import { Link, withTranslation } from '@Configs/i18n';
import { Grid, Container } from '@material-ui/core';

import { Language } from '@Components';
import { useStyles } from './style';
import { Nav } from './const';

const TopBar = ({ t }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid className={classes.root}>
                <Container>
                    <Grid
                        className={classes.wrap}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Grid className={classes.logo}>
                            <Link href="/">
                                <img src="img/Logo.png" alt="" />
                            </Link>
                        </Grid>
                        <ul className={classes.desktop}>
                            {Nav.map(item => {
                                return (
                                    <li key={item.key}>
                                        <Link href={item.url}>{item.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <Grid className={classes.language}>
                            <Language color="#FFF" />
                        </Grid>

                        {/* <Grid className={classes.mobile}>
                            3 gach
                        </Grid> */}
                    </Grid>
                </Container>
            </Grid>
        </React.Fragment>
    );
};

export default withTranslation('common')(TopBar);

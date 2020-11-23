import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GridContainer, GridItem } from '@Components';

const useStyles = makeStyles(theme => ({
    root: {},
}));

const Main = () => {
    return (
        <Grid>
            <Container>
                <GridContainer>
                    <GridItem xs={12} sm={6} lg={6} xl={7}>
                        asd
                    </GridItem>
                </GridContainer>
            </Container>
        </Grid>
    );
};

export default Main;

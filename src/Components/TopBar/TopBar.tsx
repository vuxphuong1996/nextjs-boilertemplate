import React from 'react';
import { Link, withTranslation } from '@Configs/i18n';
import {Grid, Container} from '@material-ui/core';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import {GridContainer} from '@Components';
import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
import { Button } from 'antd';
// import "../../../styles/antd.less";
// import {StyledButton} from '@Style';

// const StyledButton = w(Button)`
//   background-color: ${props=> props.color};
//   color: #fff;
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   padding: 7px 14px;
//   &:hover {
//     background-color: #5469d4;
//   }
// `;

// const StyledButton = withStyles(theme => ({
//     root: {
//         color: props => props.color
//     },
// }))(Button);


const StyledButton1 = styled(Button)`
  background: ${props => props.color};
`;

// const Tum = theme => ({
//     root: {
//         fontSize: "14px",
//         margin: 0,
//         paddingLeft: "0",
//         listStyle: "none",
//         paddingTop: "0",
//         paddingBottom: "0",
//     }
// })

// const useStyles = makeStyles(Tum);

// const useStyles = makeStyles(theme => ({
//     root: props => ({
//         background: '#140039',
//         boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)'
//     }),
//     wrap: props => ({
//         height: '100%',
//         margin: '0'
//     }),
//     logo: props => ({
//         flex: '1 0 0',
//         '& img': {
//             height: '28px',
//             maxWidth: '100%'
//         }
//     }),
//     desktop: props => ({
//         flex: '5 0 0',
//         '& li': {
//             display: 'inline-block',
//             height: '89px',
//             lineHeight: '89px',
//             // padding: '0 33px'
//         }
//     }),
//     language: props => ({
//         flex: '1 0 0'
//     }),
//     mobile: props => ({

//     })
// }));

// const StyledContainer = styled(Container)({
//     height: '100%',
// });

const Nav = [
    {
        key: 1,
        url: '/',
        name: 'Home'
    },
    {
        key: 2,
        url: '/expertise',
        name: 'Expertise'
    },
    {
        key: 3,
        url: '/portfolio',
        name: 'Portfolio'
    },
    {
        key: 4,
        url: '/about-us',
        name: 'About Us'
    },
    {
        key: 5,
        url: '/contact-us',
        name: 'Contact Us'
    },
]

const TopBar = ({ t }) => {
    // const classes = useStyles();
    return (
        <React.Fragment>
            <Grid >
                {/* <StyledButton color="red">ádsdd</StyledButton> */}
                <StyledButton1 color="red">ádzx</StyledButton1>
                <Container>
                    <Grid  container justify="center" alignItems="center" > 
                        <Grid >
                            <Link href="/">
                                <img src="img/Logo.png" alt=""/>
                            </Link>
                        </Grid>
                        {/* <GridContainer>ád</GridContainer> */}
                        <ul >
                            {Nav.map(item => {
                                return (
                                    <li key={item.key}>
                                        <Link href={item.url}>{item.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* <Grid className={classes.desktop}>
                            {Nav.map(item => {
                                return (
                                    <Link key={item.key} href={item.url}>{item.name}</Link>
                                )
                            })}
                        </Grid> */}

                        <Grid >
                            Ngon ngu
                        </Grid>

                        {/* <Grid className={classes.mobile}>
                                3 gach
                        </Grid> */}
                    </Grid>
                </Container>
            </Grid>
        </React.Fragment>
    )
}

export default withTranslation('common')(TopBar);
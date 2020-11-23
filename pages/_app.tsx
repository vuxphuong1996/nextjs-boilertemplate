import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { appWithTranslation } from '@Configs/i18n';
import theme from '@Theme';
import { configureStore } from '@Store';
import { GetLayout } from '@Layouts';
import "../style.css";

const store = configureStore();

const MyApp = ({ Component, pageProps }) => {
    const LayoutComponent = GetLayout();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <CssBaseline />
                    <LayoutComponent>
                        <Component {...pageProps} />
                    </LayoutComponent>
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    );
};

MyApp.getInitialProps = async appContext => ({
    ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);

import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import Document from 'next/document';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, ServerStyleSheets } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { appWithTranslation } from '@Configs/i18n';
import theme from '@Theme';
import { configureStore } from '@Store';
import { LandingLayout, AdminLayout, BlankLayout } from '@Layouts';
import 'styles/antd.less';

const store = configureStore();

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    const ISSERVER = typeof window === 'undefined';
    let isToken;
    if (!ISSERVER) {
        isToken = localStorage.getItem('token');
    }

    const getLayout = () => {
        if (router.pathname.includes('admin')) {
            if (typeof window !== 'undefined') {
                if (!isToken) {
                    router.push('/login');
                }
            }
            return AdminLayout;
        }

        if (router.pathname.includes('login')) {
            return BlankLayout;
        }

        return LandingLayout;
    };

    const LayoutComponent = getLayout();

    // useEffect(() => {
    //     const jssStyles = document.querySelector('#jss-server-side');
    //     if (jssStyles) {
    //         jssStyles.parentElement.removeChild(jssStyles);
    //     }
    // }, []);

    React.useEffect(() => {
        console.log('test')
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
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme} >
                    <Provider store={store}>
                        <CssBaseline />
                        <LayoutComponent>
                            <Component {...pageProps} />
                        </LayoutComponent>
                    </Provider>
                </ThemeProvider>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

MyApp.getInitialProps = async appContext => ({
    ...(await App.getInitialProps(appContext)),
});

// MyApp.getInitialProps = async (ctx) => {
//     const sheets = new ServerStyleSheets();
//     console.log(ctx)
//     const originalRenderPage = ctx.renderPage;
  
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//       });
  
//     const initialProps = await Document.getInitialProps(ctx);
  
//     return {
//       ...initialProps,
//       // Styles fragment is rendered after the app and page rendering finish.
//       styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
//     };
//   };

export default appWithTranslation(MyApp);

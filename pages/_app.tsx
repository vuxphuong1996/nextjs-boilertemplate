import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { appWithTranslation } from "@Configs/i18n";
import theme from '@Theme';
import { LandingLayout, AdminLayout, BlankLayout } from '@Layouts';

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    const ISSERVER = typeof window === "undefined";
    let isToken;
    if(!ISSERVER) {
        isToken = localStorage.getItem('token');
    }

    const getLayout = () => {
        if (router.pathname.includes('admin')) {
          if (typeof window !== 'undefined') {
            if (!isToken) {
              router.push('/login')
            }
          }
          return AdminLayout
        }
    
        if (router.pathname.includes('login')) {
          return BlankLayout
        }
    
        return LandingLayout;
    }

    const LayoutComponent = getLayout();

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <LayoutComponent>
                    <Component {...pageProps} />
                </LayoutComponent>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.getInitialProps = async appContext => ({
    ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);

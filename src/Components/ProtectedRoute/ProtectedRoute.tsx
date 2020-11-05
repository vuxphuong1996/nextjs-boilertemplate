import React from 'react';
import { useRouter } from 'next/router';

const ProtectedRoute = ({children}) => {
    console.log('protec')
    const router = useRouter();
    const ISSERVER = typeof window === "undefined";
    let isToken;
    if(!ISSERVER) {
        isToken = localStorage.getItem('token') || "";
    }
    // const isToken = localStorage.getItem('token') || "";
    const dashboardRoute = ['/admin', 'service'];
    const landingRoute = ['home', '/about-us'];

    // console.log(router)
    // console.log(landingRoute.includes(router.pathname))

    if (dashboardRoute.includes(router.pathname)) router.push('/admin')

    // if (isToken && (dashboardRoute.includes(router.pathname))) {
    //     return (
    //         <React.Fragment>
    //             <div>sidebar</div>
    //             <div>{children}</div>
    //             <div>footer</div>
    //        </React.Fragment>
    //     )
    // }

    // if (landingRoute.includes(router.pathname)) {
    //     console.log('landing')
    //     return (
    //         <React.Fragment>
    //             <div>headher</div>
    //             <div>{children}</div>
    //             <div>footer</div>
    //         </React.Fragment>
    //     );
    // }

    // if ((dashboardRoute.includes(router.pathname) && isToken) || isToken) {
    //     console.log('dashboard')
    //     return (
    //         <React.Fragment>
    //             <div>sidebar</div>
    //             <div>{children}</div>
    //             <div>footer</div>
    //         </React.Fragment>
    //     );
    // }

    return (
        <div>{children}</div>
    );
}

export default ProtectedRoute;
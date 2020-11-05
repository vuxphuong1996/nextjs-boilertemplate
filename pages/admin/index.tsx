import React from 'react';
import { i18n, Link, withTranslation } from "@Configs/i18n";
import styled from "styled-components";
import { Top, Bottom } from "@Style";
import Button from '@material-ui/core/Button';

const Admin = ({ t }) => {
    let isToken;
    const ISSERVER = typeof window === "undefined";
    if(!ISSERVER) {
        isToken = localStorage.getItem('token') || "";
    }

    if (isToken) {
        return (
            <React.Fragment>
                 <div>sidebar</div>
                 <div>admin</div>
                 {/* <div>{children}</div> */}
                <div>footer</div>
            </React.Fragment>
        )
    }

    return null
}

Admin.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

export default withTranslation("common")(Admin);

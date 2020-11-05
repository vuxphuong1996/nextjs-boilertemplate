import React from 'react';
import { withTranslation } from "@Configs/i18n";

const Login = ({ t }) => {
    return (
        <div>Login</div>
    )
}

Login.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

export default withTranslation("common")(Login);

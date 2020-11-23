import React from 'react';
import { withTranslation } from '@Configs/i18n';

const Admin = ({ t }) => {
    return (
        <React.Fragment>
            <div>sidebar</div>
            <div>admin</div>
            {/* <div>{children}</div> */}
            <div>footer</div>
        </React.Fragment>
    );
};

Admin.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(Admin);

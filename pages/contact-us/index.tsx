import React from 'react';
import { i18n, Link, withTranslation } from '@Configs/i18n';
import Button from '@material-ui/core/Button';

const ContactUs = ({ t }) => {
    return <div>Contact</div>;
};

ContactUs.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(ContactUs);

import React from 'react';
import { i18n, Link, withTranslation } from '@Configs/i18n';
import Button from '@material-ui/core/Button';

const AboutUs = ({ t }) => {
    return <div>about</div>;
};

AboutUs.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(AboutUs);

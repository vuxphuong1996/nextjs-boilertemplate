import React from 'react';
import { withTranslation } from '@Configs/i18n';

const AboutUs = ({ t }) => {
    return <div>about</div>;
};

AboutUs.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(AboutUs);

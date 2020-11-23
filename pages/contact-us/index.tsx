import React from 'react';
import { withTranslation } from '@Configs/i18n';

const ContactUs = ({ t }) => {
    return <div>Contact</div>;
};

ContactUs.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(ContactUs);

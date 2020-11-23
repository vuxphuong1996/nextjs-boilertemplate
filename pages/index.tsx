import React from 'react';
import { i18n, Link, withTranslation } from '@Configs/i18n';
import Button from '@material-ui/core/Button';

const Homepage = ({ t }) => (
    <>
        <main>
            <div>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <button
                    type="button"
                    onClick={() =>
                        i18n.changeLanguage(
                            i18n.language === 'en' ? 'vn' : 'en'
                        )
                    }
                >
                    {t('Hello')}
                </button>
                <Link href="/second-page">
                    <button type="button">{t('to-second-page')}</button>
                </Link>
            </div>
        </main>
    </>
);

Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(Homepage);

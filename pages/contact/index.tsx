import React from 'react';
import { i18n, Link, withTranslation } from "@Configs/i18n";
import styled from "styled-components";
import { Top, Bottom } from "@Style";
import Button from '@material-ui/core/Button';

const Contact = ({ t }) => {
    return (
        <div>Contact</div>
    )
}

Contact.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

export default withTranslation("common")(Contact);

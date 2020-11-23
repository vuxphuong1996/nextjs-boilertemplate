import React, { useEffect, useState } from 'react';
import { Grid, ClickAwayListener } from '@material-ui/core';

import { i18n } from '@Configs/i18n';
import { options } from './const';
import { useStyles } from './style';

function SelectLanguage({ color }) {
    const [selectedIcon, setSelectedIcon] = useState(options[0].icon);
    const [isOpen, setOpen] = useState<boolean>(false);
    const currentLanguage = i18n.language;
    const classes = useStyles({ color });

    useEffect(() => {
        if (currentLanguage === 'jp') {
            setSelectedIcon(options[1].icon);
        } else {
            setSelectedIcon(options[0].icon);
        }
    }, [currentLanguage]);

    const handleOpen = () => {
        setOpen(!false);
    };

    const handleSelectItem = item => {
        const { icon, value } = item;
        setSelectedIcon(icon);
        i18n.changeLanguage(value, () => {
            window.location.reload();
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Grid onClick={handleOpen} className={classes.root}>
                <img src={selectedIcon} alt="flag" />
                <span>&nbsp;&#9662;</span>
                {isOpen && (
                    <Grid className={classes.dropdown}>
                        {options.map(item => (
                            <Grid
                                key={item.key}
                                onClick={() => handleSelectItem(item)}
                                className={classes.dropdownItem}
                            >
                                <img src={item.icon} alt="flag" />
                                &nbsp;
                                {item.name}
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Grid>
        </ClickAwayListener>
    );
}

export default SelectLanguage;

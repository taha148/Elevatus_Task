import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { isRTL } from '../../utiles/constant';





const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        justifyContent: 'space-between',
        paddingTop: ".75rem",
        paddingBottom: ".75rem",
    },

    widthLogo: {
        width: 150,
        cursor: "pointer"
    },
    widthImg: {
        width: "100%"
    },
    container: {
        marginBottom: "2%",
    },
    rtl: {
        direction: "rtl"
    },
    languageStyle: {
        border: "none",
        borderRadius: ".5rem",
        padding: ".5rem"
    }
});

const NavBar = ({ children }) => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const changeLanguage = (e) => i18n.changeLanguage(e.target.value);
    return (
        <div className={`${isRTL() && classes.rtl} ${classes.container}`}>
            <AppBar position="static"  >
                <Toolbar variant="dense" className={classes.root}>
                    <Link to="/" className={classes.widthLogo}>
                        <Box
                            component="img"
                            alt="Your logo."
                            src="/Logo.png"
                            className={classes.widthImg}
                        />
                    </Link >

                    <button className={classes.languageStyle} type="button" value={i18n.language === "ar" ? "en" : "ar"} onClick={(e) => changeLanguage(e)} >
                        {t('menu_lang')}
                    </button >
                </Toolbar>
            </AppBar>

            {children}

        </div>
    );
}
export default NavBar
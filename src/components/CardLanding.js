import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    textAlign: {
        textAlign: "left"
    },
    borderBottomElement: {
        paddingBottom: ".25rem",
        borderBottom: "1px solid grey",
    },
    buttonPosition: {
        justifyContent: "flex-end",
    },

    elepsiseText: {
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 1,
        display: "-webkit-box",
        overflow: "hidden",
    },
    underLineRemove:{
        textDecoration:"none"
    }
});

const CardLanding = ({ job }) => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (<>
        <CardContent className={classes.textAlign}  >
            <Typography variant="h5" gutterBottom className={classes.elepsiseText}>
                {job.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" className={classes.borderBottomElement}>
                {job?.location?.city ||  t('landing.not_found')}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2" className={classes.borderBottomElement}>
                {job.career_level?.join(",") ||  t('landing.not_found')}
            </Typography>

            <Typography sx={{ mb: 1.5 }} variant="body2" className={`${classes.elepsiseText} ${classes.borderBottomElement}`}>
                {job?.skills?.join(",") ||  t('landing.not_found')}
            </Typography>
        </CardContent>
        <CardActions className={classes.buttonPosition}>
            <Link to={`/jobs/${job?.uri}`} className={classes.underLineRemove}>
    
            <Button variant="contained" type='submit' >
               {t('landing.view')}
            </Button>
            </Link>
        </CardActions>
    </>
    );
}


export default CardLanding
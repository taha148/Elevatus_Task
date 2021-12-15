import { Card, Grid, Pagination } from "@mui/material"
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";
import CardLanding from "./CardLanding";
import { useDispatch, useSelector } from 'react-redux'
import { changePage, getJobs } from '../store/actions/jobAction'
import { PAGE_LIMIT } from "../utiles/constant";



const useStyles = makeStyles({
    container: {
        marginBottom: "10rem"
    },
    paginationSection: {
        marginBottom: "1rem",

        "&>ul": {
            justifyContent: "center",
        }

    },
    textAlignCenter: {
        textAlign: "center"
    }

});




const LandingPage = ({ children }) => {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    
    const jobsList = useSelector(state => {
       return state.jobsResponse});
    const dispatch = useDispatch()


    const handleChange = (event, value) => {
        dispatch(changePage())
        setPage(value);

    };

    const { loading, error, jobsResponse } = jobsList
    useEffect(() => {
        dispatch(getJobs({ page }))
    }, [dispatch, page])

    console.log(jobsList)
    let totalPage = Math.ceil(jobsResponse?.total / PAGE_LIMIT)
    if (!loading) {
        return (<>
            {children}
            <div className={classes.textAlignCenter}>Loding...</div>
        </>)
    }
    if (!(jobsResponse?.jobs?.length)) {
        return (<>
            {children}
            <div className={classes.textAlignCenter}>There is no jobs here</div>
        </>)
    }
    return (
        <>
            {children}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} className={classes.container}>
                {jobsResponse?.jobs?.map((item) => (
                    <Grid item xs={2} sm={4} md={3} key={item.uuid}>
                        <Card sx={{ maxWidth: 300, margin: "auto" }} variant="outlined">
                            <CardLanding job={item} />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {totalPage && <Pagination count={totalPage} className={`${classes.paginationSection}`} page={page} onChange={handleChange} />}
        </>

    )
}

export default LandingPage
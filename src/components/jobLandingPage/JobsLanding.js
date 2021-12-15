import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { clickSide, getJobs, getJobsDetalis, RestStore } from '../../store/actions/jobAction';
import ChipCircle from './jobsDetalis/ChipCircle';
import SkeletonDetails from '../skeleton/SkeletonJobs';
import css from "./jobLanding.module.css";
import Description from './jobsDetalis/Description';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


function JobsLanding(props) {
    const jobsState = useSelector(state => state.jobsDetails);
    const jobsList = useSelector(state => state.jobsResponse);

    const dispatch = useDispatch()
    let navigate = useNavigate();

    let uri = useParams()?.id;
    let basicDesign = {
        fb: { fontSize: 40, color: "#3b5999" },
        tw: {
            fontSize: 40, color: "#1da1f2"
        },
        linked: {
            fontSize: 40, color: "#0077b5"
        }
    }

    useEffect(() => {
        dispatch(getJobsDetalis({ uri }))
        dispatch(getJobs({}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    useEffect(() => {
        return () => dispatch(RestStore()); // <-- reset when unmounting
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { loadingDetails, error, jobsDetails } = jobsState
    const { loading, jobsResponse } = jobsList

    const clickSideFn = (e, uriClicked) => {
        e.preventDefault()
        if (uriClicked === uri) return
        dispatch(clickSide())
        dispatch(getJobsDetalis({ uri: uriClicked }))
        navigate(`/jobs/${uriClicked}`);
    }
    const drawer = (
        < >

            {jobsResponse?.jobs?.map((job) => (
                <div onClick={(e) => clickSideFn(e, job?.uri)} className={css.drawer_container} key={job.uuid}>
                    <p className={css.titleDrawer}>{job.title}</p>
                    <p >{job.career_level.lenght ? job.career_level : "N/A"}</p>
                </div>
            ))}
        </>
    );

    return (
        <div className={css.root}>

            <div className={`${css.border_container} ${css.fl_grow_4}`}>

                {loadingDetails ? <div className={css.elemnt_value}>
                    <p className={css.title_font}> {jobsDetails?.title}</p>
                    <span> Post On: {jobsDetails?.posted_at}</span>

                    <Description title={"Description:"} description={jobsDetails?.description} />
                    <Description title={"Requirements:"} description={jobsDetails?.requirements} />

                    <p className={css.secon_title_font}> Skills:</p>
                    <ChipCircle skills={jobsDetails?.skills} />

                    <p className={css.secon_title_font}> Languages:</p>
                    <ChipCircle languages={jobsDetails?.languages} />

                    <div className={`${css.justifyContantShare} ${css.shareContainer}`}>
                        {/* share */}
                        <div className={`${css.shareContainer}`}>
                            <p className={css.secon_title_font}> Share: </p>
                            <FacebookIcon sx={basicDesign["fb"]} />
                            <TwitterIcon sx={basicDesign["tw"]} />
                            <LinkedInIcon sx={basicDesign["linked"]} /></div>
                        <Button variant="contained">Apply</Button>
                    </div>
                </div>
                    : <SkeletonDetails />}


            </div>
            <div className={`${css.fl_grow_2} ${css.scroll}`} >

                {loading ? drawer : <SkeletonDetails />}
            </div>
        </div>
    );
}

export default JobsLanding;

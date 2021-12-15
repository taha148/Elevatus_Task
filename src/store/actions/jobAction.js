import { CHANGE_PAGE, CLICK_SIDER_BAR, GET_JOBS, GET_JOBS_DETALIS, JOBS_ERROR, JOBS_ERROR_DETALIS, REST_STORE } from '../types'
import axios from 'axios'
import { PAGE_LIMIT } from '../../utiles/constant'

export const getJobs = ({ page = 0, query = "" }) => async dispatch => {

    try {
        const res = await axios.get("https://devapi-indexer.elevatustesting.xyz/api/v1/jobs", {
            params: {
                language_profile_uuid: "ee5d991c-cdc6-4e83-b0b3-96f147208549",
                itemQuery: query,
                limit: PAGE_LIMIT,
                page: !page ? page : page - 1,
            },

            headers: {
                "accept-company": process.env.REACT_APP_API_KEY_NAME,
                'Content-Type': 'application/json'

            },
        })
        dispatch({
            type: GET_JOBS,
            payload: res?.data?.results
        })
    }
    catch (error) {
        dispatch({
            type: JOBS_ERROR,
            payload: true,
        })
    }

}

export const getJobsDetalis = ({ uri }) => async dispatch => {

    try {
        const res = await axios.get("https://devapi-indexer.elevatustesting.xyz/api/v1/jobs/uri", {
            params: {
                language_profile_uuid: "ee5d991c-cdc6-4e83-b0b3-96f147208549",
                uri: uri,
                utm_source: 'other',
                utm_medium: 'other'
            },

            headers: {
                "accept-company": process.env.REACT_APP_API_KEY_NAME,
                'Content-Type': 'application/json'

            },
        })
        dispatch({
            type: GET_JOBS_DETALIS,
            payload: res?.data?.results
        })
    }
    catch (error) {
        dispatch({
            type: JOBS_ERROR_DETALIS,
            payload: true,
        })
    }

}
export const changePage = () => async dispatch => dispatch({
    type: CHANGE_PAGE,
})

export const clickSide = () => async dispatch => dispatch({
    type: CLICK_SIDER_BAR,
})
export const RestStore = () => async dispatch => dispatch({
    type: REST_STORE,
})


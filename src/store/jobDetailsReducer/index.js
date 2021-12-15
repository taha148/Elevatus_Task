import { CLICK_SIDER_BAR, GET_JOBS_DETALIS, JOBS_ERROR_DETALIS, REST_STORE } from '../types'

export const initialState = {
    jobsDetails: {},
    loadingDetails: false,
}

export default function reducers(state = initialState, action) {
    switch (action.type) {

        case GET_JOBS_DETALIS:
            return {
                ...state,
                jobsDetails: action.payload,
                loadingDetails: true

            }
        case CLICK_SIDER_BAR:
            return {
                ...state,
                loadingDetails: false

            }
        case REST_STORE:
            return {
                ...state,
                jobsDetails: {},
                loadingDetails: false

            }
        case JOBS_ERROR_DETALIS:
            return {
                loadingDetails: false,
                error: action.payload
            }

        default: return state
    }

}
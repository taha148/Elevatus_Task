import { CHANGE_PAGE, GET_JOBS, JOBS_ERROR } from '../types'

export const initialState = {
    jobsResponse: {},
    loading: false,
}

export default function reducers(state = initialState, action) {

    switch (action.type) {

        case GET_JOBS:
            return {
                ...state,
                jobsResponse: action.payload,
                loading: true

            }

        case CHANGE_PAGE:
            return {
                ...state,
                loading: false

            }
        case JOBS_ERROR:
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }

}
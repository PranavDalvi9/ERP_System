import { DATA_LOADING, DATA_SUCCESS, DATA_FAILURE } from "./Action"

const initState = {
    error: false,
    loading: false,
    studentData:[]
};

export const studentReducer = (store = initState, { type, payload }) => {
    // console.log("logincccc" , store)
    switch (type) {
        case DATA_LOADING:
            return { ...store, loading: true };

        case DATA_SUCCESS:
            return {
                ...store,
                error: false,
                loading: false,
                userData:[payload]
            };

        case DATA_FAILURE:
            return {
                ...initState
            }

        default:
            return store
    }
}
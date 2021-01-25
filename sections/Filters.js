import React, { useEffect, useContext } from 'react'
import { store } from '../store.js'
import { getFilters } from "../api/globalAPI"

function Filters(props) {
    const { dispatch, state } = useContext(store);
    console.log('globalState,', state);

    const handleFetchFilters = async () => {
        const result = await getFilters();
        dispatch({ type: "SET_FILTERS", payload: result })
    }
    useEffect(() => {
        handleFetchFilters()
    }, [])
    return (
        <div>
            <div className="bg-white p-2">
                <h3 className="font-bold">JOB TYPE</h3>
                <div>
                    {state.filters["job_type"]?.map(filter => <div>{filter.key} - {filter.doc_count}</div>)}
                </div>
            </div>
            <div className="bg-white p-2">
                <h3 className="font-bold">JOB TYPE</h3>
                <div>
                    {state.filters["department"]?.map(filter => <div>{filter.key} - {filter.doc_count}</div>)}
                </div>
            </div>
            <div className="bg-white p-2">
                <h3 className="font-bold">JOB TYPE</h3>
                <div>
                    {state.filters["work_schedule"]?.map(filter => <div>{filter.key} - {filter.doc_count}</div>)}
                </div>
            </div>
            <div className="bg-white p-2">
                <h3 className="font-bold">JOB TYPE</h3>
                <div>
                    {state.filters["experience"]?.map(filter => <div>{filter.key} - {filter.doc_count}</div>)}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Filters)

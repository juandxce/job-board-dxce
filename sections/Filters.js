import React, { useEffect, useContext } from 'react'
import { store } from '../store.js'
import { getFilters } from "../api/globalAPI"

function Filters(props) {
    const { dispatch, state } = useContext(store);

    const handleFetchFilters = async () => {
        const result = await getFilters();
        dispatch({ type: "SET_FILTERS", payload: result })
    }
    useEffect(() => {
        handleFetchFilters()
    }, [])
    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-2 col-span-full">
                <h3 className="font-semibold">JOB TYPE</h3>
                <div>
                    {state.filters["job_type"]?.map(filter => <div className="cursor-pointer hover:underline">{filter.key} - <span className="text-gray-400">{filter.doc_count}</span></div>)}
                </div>
            </div>
            <div className="bg-white p-2 gap-4">
                <h3 className="font-semibold">DEPARTMENT</h3>
                <div>
                    {state.filters["department"]?.map(filter => <div className="cursor-pointer hover:underline">{filter.key} - <span className="text-gray-400">{filter.doc_count}</span></div>)}
                </div>
            </div>
            <div className="bg-white p-2">
                <h3 className="font-semibold">WORK SCHEDULE</h3>
                <div>
                    {state.filters["work_schedule"]?.map(filter => <div className="cursor-pointer hover:underline">{filter.key} - <span className="text-gray-400">{filter.doc_count}</span></div>)}
                </div>
            </div>
            <div className="bg-white p-2">
                <h3 className="font-semibold">EXPERIENCE</h3>
                <div>
                    {state.filters["experience"]?.map(filter => <div className="cursor-pointer hover:underline">{filter.key} - <span className="text-gray-400">{filter.doc_count}</span></div>)}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Filters)

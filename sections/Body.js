import React, { useContext, useEffect } from 'react'
import { store } from '../store'
import { getJobs } from '../api/globalAPI'

function Body() {
    const globalState = useContext(store)
    const { dispatch } = globalState;
    console.log('value', globalState)
    const handleJobsFetch = async () => {
        const result = await getJobs("deve");
        console.log('result??', result)
    }
    useEffect(() => {
        handleJobsFetch();
    }, [])
    return (
        <div className="bg-white p-2">Body</div>
    )
}

export default React.memo(Body)

import React, { useState, useContext } from "react";
import { store } from '../store.js'

function Search() {
    const { dispatch } = useContext(store);

    const [localState, setLocalState] = useState({
        searchVal: '',
        typingTimeout: 0
    })

    const changeName = (e) => {
        setLocalState({
            searchVal: e.target.value,
            typingTimeout: setTimeout(function () {
                dispatch({ type: "SET_SEARCH_VALUE", payload: e.target.value })
            }, 3000)
        });

        if (localState.typingTimeout) {
            clearTimeout(localState.typingTimeout);
        }
    }

    const handleSearchSubmit = (e) => {
        if (e.key !== 'Enter') return
        dispatch({ type: "SET_SEARCH_VALUE", payload: localState.searchVal })
    }

    return (
        <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm"> &#128269; </span>
            </div>
            <input
                onKeyDown={handleSearchSubmit}
                onChange={changeName}
                autoComplete="off"
                type="search"
                name="search"
                id="search"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search for any job, title, keywords or company"
            />
        </div>
    )
}

export default React.memo(Search)

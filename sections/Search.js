import React from "react";

function Search() {
    return (
        <div>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">
                    &#128269;
                    </span>
                </div>
                <input type="search" name="search" id="search" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Search for any job, title, keywords or company" />
            </div>
        </div>
    )
}

export default React.memo(Search)

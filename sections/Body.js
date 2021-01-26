import React, { useContext, useEffect } from "react";
import { store } from "../store";
import { getJobs } from "../api/globalAPI";
import { isEqual } from "underscore";

function Body() {
  const { dispatch, state } = useContext(store);
  const handleJobsFetch = async (searchVal, filters) => {
    const result = await getJobs(searchVal, filters);
    dispatch({ type: "SET_JOB_POSTINGS", payload: result?.jobs });
  };
  useEffect(() => {
    handleJobsFetch(state.searchValue, state.selectedFilters);
  }, [state.searchValue, state.selectedFilters]);
  return (
    <div className="bg-white p-6">
      <div className="grid grid-cols-8 gap-4 my-2">
        <div className="col-span-full lg:col-span-2">
          <span className="font-semibold">
            {state.jobPostings?.reduce(
              (acc, jopbpost) => jopbpost.items?.length + acc,
              0
            )}
          </span>{" "}
          Job postings
        </div>
        <div className="col-span-full hidden md:block lg:col-span-5 lg:col-start-4">
          <span className="m-1.5 text-gray-400 block md:inline-block">
            Sort by
          </span>
          <span className="m-1.5 cursor-pointer hover:underline">Location</span>
          <span className="m-1.5 cursor-pointer hover:underline">Role</span>
          <span className="m-1.5 cursor-pointer hover:underline">
            Department
          </span>
          <span className="m-1.5 cursor-pointer hover:underline">
            Education
          </span>
          <span className="m-1.5 cursor-pointer hover:underline">
            Experience
          </span>
        </div>
      </div>
      <div>
        {state.jobPostings.map((post, index) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (isEqual(post, state.selectedJobPosting)) {
                return dispatch({
                  type: "SET_SELECTED_JOB_POSTING",
                  payload: {},
                });
              }
              dispatch({ type: "SET_SELECTED_JOB_POSTING", payload: post });
            }}
            key={index}
            className="m-3 cursor-pointer hover:bg-gray-50 p-2"
          >
            <div>
              <span className="bg-gray-500 text-white px-3 py-2 rounded h-10	w-10 inline-flex self-center text-center font-bold justify-self-center">
                {post.name.substring(0, 2)}
              </span>{" "}
              {post.items.length} jobs for {post.name}
            </div>
            <div
              className={`${
                !isEqual(post, state.selectedJobPosting) && "hidden"
              } block divide-y divide-gray-200`}
            >
              {post.items?.map((item, postIndex) => (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isEqual(post, state.selectedItem)) {
                      return dispatch({
                        type: "SET_SELECTED_ITEM",
                        payload: {},
                      });
                    }
                    dispatch({ type: "SET_SELECTED_ITEM", payload: item });
                  }}
                  className="p-2 cursor-pointer"
                  key={postIndex}
                >
                  <div className="font-semibold">{item.job_title}</div>
                  <div>
                    {item.job_type} | {item.salary_range[0]} -{" "}
                    {item.salary_range[1]} | {item.city}
                  </div>
                  <div
                    className={`${
                      !isEqual(item, state.selectedItem) && "hidden"
                    } block grid md:grid-cols-4 grid-cols-3 relative pb-12 md:pb-2`}
                  >
                    <div className="col-span-1 font-bold">Department:</div>
                    <div className="col-span-2 md:col-start-2 md:col-end-4 md:col-span-3">
                      {item.department.reduce((acc, val, idx) => {
                        if (idx !== item.department.length - 1) {
                          return (acc += `${val}, `);
                        }
                        return (acc += `${val}.`);
                      }, "")}
                    </div>

                    <div className="col-span-1 font-bold md:col-span-1 md:col-start-1 md:col-end-2">
                      Hours / Shifts:
                    </div>
                    <div className="col-span-2 md:col-start-2 md:col-end-4">
                      {item.hours[0]} / {item.work_schedule}
                    </div>
                    <div className="col-span-1 font-bold md:col-span-1 md:col-start-1 md:col-end-2">
                      Summary
                    </div>
                    <div className="col-span-2 md:col-span-2 md:col-start-2 md:col-end-4">
                      {item.description}
                    </div>
                    <button className="p-1 absolute bottom-0  left-20 border-2 border-blue-500 left-0 bg-blue-500 text-white font-light md:bottom-32 md:right-2 md:left-auto rounded">
                      Job details
                    </button>
                    <button className="p-1 absolute bottom-0 left-48 text-blue-500 border-2 border-blue-500 font-light md:bottom-12 md:right-2 md:left-auto rounded">
                      Save job
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Body);

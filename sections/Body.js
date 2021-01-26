import React, { useContext, useEffect } from "react";
import { store } from "../store";
import { getJobs } from "../api/globalAPI";

function Body() {
  const { dispatch, state } = useContext(store);
  const handleJobsFetch = async (searchVal) => {
    const result = await getJobs(searchVal);
    dispatch({ type: "SET_JOB_POSTINGS", payload: result.jobs });
  };
  useEffect(() => {
    handleJobsFetch(state.searchValue);
  }, [state.searchValue]);
  return (
    <div className="bg-white p-6">
      <div className="grid grid-cols-8 gap-4 my-2">
        <div className="col-span-full lg:col-span-2">
          <span className="font-semibold">
            {state.jobPostings.reduce(
              (acc, jopbpost) => jopbpost.items?.length + acc,
              0
            )}
          </span>{" "}
          Job postings
        </div>
        <div className="col-span-full hidden md:block lg:col-span-5 lg:col-start-4">
          <span className="m-1.5 text-gray-400 block">Sort by</span>
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
        {state.jobPostings.map((post) => (
          <div>
            <div>
              {post.total_jobs_in_hospital} jobs for {post.name}
            </div>
            <div className="divide-y divide-gray-200">
              {post.items?.map((item) => (
                <div className="p-2 ">
                  <div className="font-semibold">{item.job_title}</div>
                  <div>
                    {item.job_type} | {item.salary_range[0]} -{" "}
                    {item.salary_range[1]} | {item.city}
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

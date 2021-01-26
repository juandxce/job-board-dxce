import React, { useEffect, useContext } from "react";
import { store } from "../store.js";
import { getFilters } from "../api/globalAPI";

function Filters(props) {
  const { dispatch, state } = useContext(store);

  const handleFetchFilters = async () => {
    const result = await getFilters();
    dispatch({ type: "SET_FILTERS", payload: result });
  };
  useEffect(() => {
    handleFetchFilters();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-white p-2 col-span-full">
        <h3 className="font-semibold">JOB TYPE</h3>
        <div>
          {state.filters["job_type"]?.map((filter) => (
            <button
              type="button"
              className={`${
                state.selectedFilters?.job_type === filter.key &&
                "text-blue-500"
              } text-left block cursor-pointer hover:underline`}
              onClick={() =>
                dispatch({
                  type: "SELECT_USER_FILTERS",
                  payload: { key: "job_type", value: filter.key },
                })
              }
            >
              {filter.key} -{" "}
              <span className="text-gray-400">{filter.doc_count}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white p-2 gap-4">
        <h3 className="font-semibold">DEPARTMENT</h3>
        <div>
          {state.filters["department"]?.map(
            (filter, index) =>
              (index < 10 && (
                <button
                  type="button"
                  className={`${
                    state.selectedFilters?.department === filter.key &&
                    "text-blue-500"
                  } text-left block cursor-pointer hover:underline`}
                  onClick={() =>
                    dispatch({
                      type: "SELECT_USER_FILTERS",
                      payload: { key: "department", value: filter.key },
                    })
                  }
                >
                  {filter.key} -{" "}
                  <span className="text-gray-400">{filter.doc_count}</span>
                </button>
              )) ||
              null
          )}
          <div
            onClick={() =>
              dispatch({ type: "SET_MODAL_IS_OPEN", payload: true })
            }
            className="text-purple-500 pt-4 cursor-pointer"
          >
            Show more...
          </div>
        </div>
      </div>
      <div className="bg-white p-2">
        <h3 className="font-semibold">WORK SCHEDULE</h3>
        <div>
          {state.filters["work_schedule"]?.map((filter) => (
            <button
              type="button"
              className={`${
                state.selectedFilters?.work_schedule === filter.key &&
                "text-blue-500"
              } text-left block cursor-pointer hover:underline`}
              onClick={() =>
                dispatch({
                  type: "SELECT_USER_FILTERS",
                  payload: { key: "work_schedule", value: filter.key },
                })
              }
            >
              {filter.key} -{" "}
              <span className="text-gray-400">{filter.doc_count}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white p-2">
        <h3 className="font-semibold">EXPERIENCE</h3>
        <div>
          {state.filters["experience"]?.map((filter) => (
            <button
              type="button"
              className={`${
                state.selectedFilters?.experience === filter.key &&
                "text-blue-500"
              } text-left block cursor-pointer hover:underline`}
              onClick={() =>
                dispatch({
                  type: "SELECT_USER_FILTERS",
                  payload: { key: "experience", value: filter.key },
                })
              }
            >
              {filter.key} -{" "}
              <span className="text-gray-400">{filter.doc_count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Filters);

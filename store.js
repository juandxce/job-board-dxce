import React, { createContext, useReducer } from "react";

const initialState = { filters: {}, jobPostings: [], searchValue: "" };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log("action", action);
    let newState = {};
    switch (action.type) {
      case "SET_SEARCH_VALUE":
        newState = { ...state, searchValue: action.payload };
        return newState;
      case "SET_JOB_POSTINGS":
        newState = { ...state, jobPostings: action.payload };
        return newState;
      case "SET_FILTERS":
        newState = { ...state, filters: action.payload };
        return newState;
      case "SET_NAV_MENU_OPEN":
        newState = { ...state, navMenuIsOpen: action.payload };
        return newState;
      case "SET_MODAL_IS_OPEN":
        newState = { ...state, modalIsOpen: action.payload };
        return newState;
      case "SET_SELECTED_ITEM":
        newState = { ...state, selectedItem: action.payload };
        return newState;
      case "SET_SELECTED_JOB_POSTING":
        newState = { ...state, selectedJobPosting: action.payload };
        return newState;
      case "SELECT_USER_FILTERS":
        const newFilters = { ...state.selectedFilters };
        if(newFilters[action.payload.key] === action.payload.value) {
            delete newFilters[action.payload.key];
        } else {
            newFilters[action.payload.key] = action.payload.value
        }

        newState = { ...state, selectedFilters: newFilters};
        return newState;
      default:
        return newState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

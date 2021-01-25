import React, { createContext, useReducer } from 'react';

const initialState = { filters: {}, jobPostings: [], searchValue: "" };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        console.log('action', action)
        let newState = {};
        switch (action.type) {
            case 'SET_SEARCH_VALUE':
                newState = { ...state, searchValue: action.payload }
                return newState;
            case 'SET_JOB_POSTINGS':
                newState = { ...state, jobPostings: action.payload }
                return newState;
            case 'SET_FILTERS':
                newState = { ...state, filters: action.payload }
                return newState;
            default:
                return newState;
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
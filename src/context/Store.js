import React, { createContext, useReducer } from 'react';
// import ActionTypes from './ActionTypes'
const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
	// return <></>
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'ADD_USER':
				return { ...state, userName: action.payload.userName }
			default:
				return state;
		};
	}, initialState);
	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
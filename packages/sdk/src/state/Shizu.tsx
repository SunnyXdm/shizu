import React, { createContext, useContext, ReactNode, useReducer } from 'react';

export const ShizuContext = createContext({});

export const useShizu = () => {
	return useContext(ShizuContext);
};

interface ShizuProviderProps {
	children: ReactNode;
}

const initialState = {
	chats: [],
	user: null,
};
export const ShizuProvider = ({ children }: ShizuProviderProps) => {
	const reducer = (state: any, action: any) => {
		switch (action.type) {
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);

    const 

	return (
		<ShizuContext.Provider
			value={{
				user: state.user,
			}}
		>
			{children}
		</ShizuContext.Provider>
	);
};

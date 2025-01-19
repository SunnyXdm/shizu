import React, { createContext, useContext } from 'react';
export const ShizuContext = createContext({});

export const useShizu = () => {
	return useContext(ShizuContext);
};

import { ReactNode } from 'react';

interface ShizuProviderProps {
	children: ReactNode;
}

export const ShizuProvider = ({ children }: ShizuProviderProps) => {
	return <ShizuContext.Provider value={{}}>{children}</ShizuContext.Provider>;
};

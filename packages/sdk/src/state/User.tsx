import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext({});
export const useUser = () => {
	return useContext(UserContext);
};

import { ReactNode } from 'react';

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

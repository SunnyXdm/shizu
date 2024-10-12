// reducer global state context

import React, {createContext, useReducer} from 'react';

// Initial State
const initialState = {
  user: null,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
  // Reducer
  const AppReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{user: state.user}}>
      {children}
    </GlobalContext.Provider>
  );
};

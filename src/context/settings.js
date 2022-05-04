import React, { useReducer } from 'react';

export const SettingsContext = React.createContext();

export const initialState = {
  hideCompleted: true,
  numToDisplay: 3,
  defaultSortField: 'DIFFICULTY'
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE_HIDE':
      return { ...state, hideCompleted: !state.hideCompleted };
    case 'DISPLAY_NUM':
      if (+payload > 1)
        return { ...state, numToDisplay: payload }
      else
        return state;
    case 'SORT':
      return { ...state, defaultSortField: payload }
    default:
      return state;
  }
}

function SettingsProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;

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
      return { ...state, numToDisplay: payload }
    case 'SORT':
      return { ...state, defaultSortField: payload }
    default:
      return state;
  }
}

function SettingsProvider({ children }) {
  let [settings, settingsDispatch] = useReducer(reducer, initialState);

  return (
    <SettingsContext.Provider value={{ settings, settingsDispatch }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;

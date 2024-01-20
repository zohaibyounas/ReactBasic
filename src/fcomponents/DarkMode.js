import React, { useReducer } from 'react';

const initialState = {
  darkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const DarkMode = () => {
  const [theme, dispatch] = useReducer(themeReducer, initialState);

  return (
    <div>
      <p>Dark Mode: {theme.darkMode ? 'On' : 'Off'}</p>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Toggle Dark Mode</button>
    </div>
  );
};

export default DarkMode;

import {createSelector, createSlice} from '@reduxjs/toolkit';

export interface themeState {
  themeDark: boolean;
}

const initialState: themeState = {
  themeDark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    stateChange: state => {
      state.themeDark = !state.themeDark;
    },
  },
});

export const {stateChange} = themeSlice.actions;

export const getThemeDark = createSelector(
  (state: {theme: any}) => state.theme,
  theme => theme.themeDark,
);

export default themeSlice.reducer;

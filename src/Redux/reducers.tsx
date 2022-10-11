import {combineReducers} from '@reduxjs/toolkit';
import themeSlice from './themeSlice';

export default combineReducers({
  theme: themeSlice,
});

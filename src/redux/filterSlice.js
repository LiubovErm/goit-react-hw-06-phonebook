import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
     changeFilter(_, action) {
          const filtredContacts = action.payload.toLowerCase();
          return filtredContacts
        },
  },
});

export const { changeFilter } = filterSlice.actions;

// Selectors
export const getFilter = state => state.filter;
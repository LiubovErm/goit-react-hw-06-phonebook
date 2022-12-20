import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
        },
    }
});

const persistConfig = {
    key: 'contacts',
    storage
};

export const persistedContactReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.contacts;



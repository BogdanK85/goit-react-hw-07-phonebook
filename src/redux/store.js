import {
  configureStore,
  // getDefaultMiddleware
} from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: ['persist/PERSIST'],
//     },
//   }),
// ];
export const store = configureStore({
  reducer: {
    contactData: contactsReducer,
  },
  // filter: filterReducer,
  // middleware,
});

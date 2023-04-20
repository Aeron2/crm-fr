import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import ticketReducer from './page/ticket-list/ticketsSlice';
const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import ticketReducer from './page/ticket-list/ticketsSlice';
import loginReducer from './components/login/loginSlice';
const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    login: loginReducer,
  },
});

export default store;

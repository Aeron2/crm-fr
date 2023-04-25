import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import ticketReducer from './page/ticket-list/ticketsSlice';
import loginReducer from './components/login/loginSlice';
import userReducer from './page/dashboard/userSlice';
const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;

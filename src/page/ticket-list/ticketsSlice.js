import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  isLoading: false,
  error: null,
};

const ticketListSlice = createSlice({
  name: 'ticketList',
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});


export const fetchAllTickets = (state) => {
  
}
const { reducer, actions } = ticketListSlice;

export const { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail } =
  actions;
export default reducer;

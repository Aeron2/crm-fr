import axios from 'axios';
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
} from './ticketsSlice';
export const fetchAllTickets = () => async (dispatch) => {
  console.log('hello');
  dispatch(fetchTicketLoading());

  try {
    const result = await axios.get('http://localhost:3001/v1/ticket', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRocnV2YWVyb24yMDAyQGdtYWlsLmNvbSIsImlhdCI6MTY4MTU3OTU1NSwiZXhwIjoxNjg0MTcxNTU1fQ.3EhU4cSLF-cJFqOtbkumvYTSOH_qWnc-2b-KWC02xnY',
      },
    });
    console.log(result);
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSerachTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
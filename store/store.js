import { configureStore } from "@reduxjs/toolkit";
import { ticketsSlice } from './tickets/ticketsSlice';


export const store = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer
  }
});

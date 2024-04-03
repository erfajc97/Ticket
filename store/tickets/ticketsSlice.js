import { createSlice } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    status: [],
    data: {},
    role: "",
    calender: {},
    type: {},
    activityEmployee: {},
    lastSkip: 0,
    currentPage: 1,
    loading: true,
    activeKey: '',
  },
  reducers: {
    setInitialTickets: (state) => {
      state.data.tickets = [];
      state.data.columns = [];
    },

    setTicketsStatus: (state, { payload }) => {
      state.status = payload;
    },
    setTickets: (state, { payload }) => {
      const { data, metadata } = payload;
      state.data.tickets = data?.dataSource;
      state.data.columns = data?.columns;
      state.data.quantity = metadata?.quantity;
      state.data.limit = metadata?.limit;
      state.data.skip = metadata?.skip;
      state.data.rest = metadata?.rest;
    },
    setRoleTickets: (state, { payload }) => {
      state.role = payload;
    },
    setCalender: (state, { payload }) => {
      state.calender = payload;
    },
    setType: (state, { payload }) => {
      state.type = payload;
    },
    setActivityEmployee: (state, { payload }) => {
      state.activityEmployee = payload;
    },
    setLastSkip: (state, { payload }) => {
      state.lastSkip = payload
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload
    },
    setLoading: (state, {payload}) => {
      state.loading = payload
    },
    clearCalendar: (state) => {
      state.calender = {}
      state.loading = true
    },
    setActiveKey: (state, { payload }) => {
      state.activeKey = payload
    }
  },
});

export const {
  setTicketsStatus,
  setTickets,
  setRoleTickets,
  setCalender,
  setType,
  setInitialTickets,
  setActivityEmployee,
  setCurrentPage,
  setLastSkip,
  setLoading,
  clearCalendar,
  setActiveKey,
} = ticketsSlice.actions;

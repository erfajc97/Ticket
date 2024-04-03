import createTicketAdmin from "../../src/Tickets/Services/createTicketAdmin";
import getStatusTicket from "../../src/Tickets/Services/getStatusTicket";
import getTicketByDate from "../../src/Tickets/Services/getTicketByDate";
import getTicketsTable from "../../src/Tickets/Services/getTicketsTable";
import { getTableDataHelper } from "../../src/helpers/getTableDataHelper";
import verifyResponse from './../../src/helpers/verifyResponse';
import getEmployeeActivity from './../../src/Tickets/Services/getEmployeeActivity';
import getType from './../../src/Tickets/Services/getType';
import {
  setTicketsStatus,
  setTickets,
  setCalender,
  setType,
  setActivityEmployee,
  setInitialTickets,
  setCurrentPage,
  setLastSkip,
  clearCalendar,
  setLoading,
  setActiveKey,
} from "./ticketsSlice";

const URL_DEV = "https://topiadev.topiaapp.com/api/ticket";

export const StatusTicketsThunk =
  (role = "tenant", companyId = 1) =>
    async (dispatch) => {
      const response = await getStatusTicket(URL_DEV, role, companyId);
      if (response.success) {
        dispatch(setTicketsStatus(response.data.data))
        dispatch(setActiveKey(response.data.data?.[0]?.name))
      }
      return response;
    };

export const TicketsThunk =
  ({ id, role = "tenant", skip = 0, findId, companyId = 1, last, previousData, actualLimit = 10, currentPage }) =>
    async (dispatch) => {
      const limit = last ? last : actualLimit;
      const newSkip = last ? 0 : skip
      const { data, status, success } = await getTicketsTable(
        URL_DEV,
        id,
        limit,
        newSkip,
        role,
        findId,
        companyId
      );
      if (success) {
        const ticketTableData = getTableDataHelper({ data: data.data, metadata: data.metadata, skip, last, actualLimit, previousData, currentPage })
        dispatch(setInitialTickets());
        ticketTableData.data.page && dispatch(setCurrentPage(1));
        dispatch(setTickets(ticketTableData));
        dispatch(setLastSkip(skip));
      }
      return { success, status };
    };

export const currentTicketPageThunk = (page) => async (dispatch) => {
  dispatch(setCurrentPage(page));
}

export const lastSkipTicketThunk = ({ lastSkip }) => async (dispatch) => {
  dispatch(setLastSkip(lastSkip));
}

export const createATicketsAdminThunk =
  (
    files,
    categoryId,
    subCategoryId,
    employeeId,
    title,
    description,
    employeeCreatorId,
    companyId = 1
  ) =>
    async (dispatch) => {
      const { data, status, success } = await createTicketAdmin(
        URL_DEV,
        files,
        categoryId,
        subCategoryId,
        employeeId,
        title,
        description,
        employeeCreatorId,
        companyId
      );
      verifyResponse(data, status, "Ticket Creado Exitosamente");
      if (success) dispatch(setTickets(data));
      return { success, status };
    };

export const ticketOfCalenderThunk =
  ({ timeBegin, timeEnd, employeeId = "", typeId, companyId = 1 }) =>
    async (dispatch) => {
      dispatch(setLoading(true))
      const { data, status, success } = await getTicketByDate(
        timeBegin,
        timeEnd,
        employeeId,
        typeId,
        companyId
      );
      verifyResponse(data, status);
      if (success) dispatch(setCalender(data));
      dispatch(setLoading(false));
      return { success, status };
    };

export const typeTicketsThunk = () => async (dispatch) => {
  const { data, status, success } = await getType(URL_DEV);
  verifyResponse(data, status);
  if (success) dispatch(setType(data));
  return { success, status };
};

export const employeeActivityThunk = (id) => async (dispatch) => {
  const { data, status, success } = await getEmployeeActivity(id);
  verifyResponse(data, status);
  if (success) dispatch(setActivityEmployee(data));
  return { success, status };
};

export const clearCalendarThunk = () => async (dispatch) => {
  return dispatch(clearCalendar())
}
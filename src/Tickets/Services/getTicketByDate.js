import axios from "axios";

const getTicketByDate = async (timeBegin, timeEnd, employeeId, typeId) => {
  try {
    if (!typeId) typeId = "";
    const response = await axios.get(
      `https://topiadev.topiaapp.com/api/employee/activity/accepted?company_id=${1}&employee_id=${employeeId}&type_id=${typeId}&date_begin=${timeBegin}&date_end=${timeEnd}`
    );
    return {
      success: true,
      ...response,
    };
  } catch (errorResponse) {
    return {
      success: false,
      ...errorResponse.response,
    };
  }
};

export default getTicketByDate;

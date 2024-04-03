import axios from "axios";

const getTicketsTable = async (URL_DEV, id, limit, skip, findId = "", ) => {
  try {
    const response = await axios.get(
      `${URL_DEV}?limit=${limit}&skip=${skip}&status_id=${id}&company_id=${1}&type=admin&find_by=ticket&find_value=${findId}`
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

export default getTicketsTable;

import axios from "axios";

const getStatusTicket = async (URL_DEV) => {
  try {
    const response = await axios.get(
      `${URL_DEV}/status?type=tenant&company_id=${1}`
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

export default getStatusTicket;

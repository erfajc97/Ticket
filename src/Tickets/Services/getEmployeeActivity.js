import axios from "axios";

const getEmployeeActivity = async (id) => {
  try {
    const response = await axios.get(
      `https://topiadev.topiaapp.com/api/employee/activity/accepted/detail?activity_id=${id}`
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

export default getEmployeeActivity;

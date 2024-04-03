import axios from "axios";

const getType = async (URL_DEV) => {
  try {
    const response = await axios.get(`${URL_DEV}/type`);

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

export default getType;

import axios from "axios";
const URL_DEV = "https://topiadev.topiaapp.com/api/ticket";
const getExcelTickets = async (skip, role) => {
  try {
    if (!role) role = "admin";
    const response = await axios({
      url: `${URL_DEV}/export?limit=50&skip=${skip}&status_id=6&company_id=${1}&type=${role}`,
      method: "GET",
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "lista-de-tickets.xlsx");
    document.body.appendChild(link);
    link.click();

    return {
      success: true,
      ...response,
    };
  } catch (error) {
    return {
      success: false,
      ...error.response,
    };
  }
};

export default getExcelTickets;

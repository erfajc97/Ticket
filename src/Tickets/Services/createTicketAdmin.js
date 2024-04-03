import axios from "axios";
import { dataToFormData } from "../../helpers/dataToFormData";

const createTicketAdmin = async (
  URL_DEV,
  files,
  categoryId,
  subCategoryId,
  employeeId,
  title,
  description,
  employeeCreatorId,
) => {
  try {
    const ticketAdmin = {
      category_id: categoryId,
      subcategory_id: subCategoryId,
      employee_id: employeeId,
      title: title,
      description: description,
      company_id: 1,
      employee_creator_id: employeeCreatorId,
    };
    const formData = dataToFormData(ticketAdmin);
    files?.fileList?.forEach(({ originFileObj }) => {
      formData.append("files", originFileObj);
    });
    const response = await axios.post(`${URL_DEV}/admin`, formData);

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

export default createTicketAdmin;

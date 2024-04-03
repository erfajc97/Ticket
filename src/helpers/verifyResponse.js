import { toast } from "react-toastify";

const verifyResponse = (dataResponse, statusResponse, message) => {
  switch (statusResponse) {
    case 200:
      toast.success(message);
      return true;
    case 201:
      toast.success(message);
      return true;
    case 204:
      toast.success(message);
      return true;
    case 400:
      const missingElement = dataResponse.errors[0].path;
      const finalMessage = dataResponse.errors[0].msg.replace(
        "Elemento",
        missingElement.charAt(0).toUpperCase() + missingElement.slice(1)
      );
      toast.warn(finalMessage);
      return false;
    default:
      toast.error("No se pudo realizar la accion, intente de nuevo mas tarde")
      return false;
  }
};

export default verifyResponse;

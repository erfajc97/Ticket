import { useNavigate,  } from "react-router-dom";

const useRedirectTo = () => {
  const navigate = useNavigate();
  const handleRedirectTo = (url) => navigate(url);

  return {
    handleRedirectTo,
  };
};

export default useRedirectTo;

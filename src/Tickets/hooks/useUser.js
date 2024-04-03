import { useSelector } from "react-redux";

const useUser = () => {
  const userData = useSelector((state) => state.auth);
  const residencialID = userData.committee.residential_id;

  return { userData, residencialID };
};

export default useUser;

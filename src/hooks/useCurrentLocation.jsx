import { useLocation, useParams } from "react-router-dom"

const useCurrentLocation = () => {
  const param = useParams()
  const location = useLocation()
  
  return {
    param,
    location
  }
}

export default useCurrentLocation

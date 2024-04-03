import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { StatusTicketsThunk, TicketsThunk } from "../../../store/tickets/thunks";

const useTickets = () => {
  const dispatch = useDispatch();
  const currentCompanyId = 1
  const statusTickets = useSelector((state) => state.tickets.status);
  const { roles } =  [
    {
      companyId: 1,
      residentialId: 'b9f4hWoqLYRVArJMPg8V',
      companyName: 'VILLA MARISCAL',
      roleCode: 'admin',
      roleName: 'Administrador',
      companyType: 'residential',
      employeeId: 4,
      currencySymbol: 'Q'
    },
    {
      companyId: 2,
      residentialId: 'gPYgm8mWqQaIaMQUggKz',
      companyName: 'CENTRICO',
      roleCode: 'admin',
      roleName: 'Administrador',
      companyType: 'residential',
      employeeId: null,
      currencySymbol: 'Q'
    },
    {
      companyId: 29,
      residentialId: 'NTFrD52ETxqifdLAUiSq',
      companyName: 'PARQUE LAS AMÉRICAS',
      roleCode: 'admin',
      roleName: 'Administrador',
      companyType: 'mall',
      employeeId: null,
      currencySymbol: 'Q'
    },
    {
      companyId: 32,
      residentialId: 'YGEY01QSLR07Im8IQGn5',
      companyName: 'ARBORETO SAN NICOLAS',
      roleCode: 'admin',
      roleName: 'Administrador',
      companyType: 'mall',
      employeeId: null,
      currencySymbol: 'Q'
    },
    {
      companyId: 31,
      residentialId: 'Yd5MV7jkA0MjQeCmzKrZ',
      companyName: 'TUSCANIA',
      roleCode: 'admin',
      roleName: 'Administrador',
      companyType: 'residential',
      employeeId: null,
      currencySymbol: '$'
    },
    {
      companyId: 30,
      residentialId: 'ja5Smr2i649YGDJPOvz0',
      companyName: 'ARBORETO TIQUISATE',
      roleCode: 'admin',
      roleName: 'Administrador',
      companyType: 'mall',
      employeeId: null,
      currencySymbol: 'Q'
    }
  ]
  const { location } = useCurrentLocation();
  const [loading, setLoading] = useState(false);
  const [statusResult, setStatusResult] = useState(true);
  const roleType =
    location.pathname.split("/")[3] === "administrativo" ? "admin" : "tenant";
  
  const getAllDataTickets = async () => {
    setLoading(true);
    const response = await getTicketsByStatus();
    if (response.success) {
      await getTableTickets(response.data.data[0].id);
    }
    setLoading(false);
  };

  const getTicketsByStatus = async () => {
    const response = await dispatch(
      StatusTicketsThunk(roleType, currentCompanyId)
    );
    return response;
  };

  const getTableTickets = async (id) => {
    const response = await dispatch(
      TicketsThunk({
        id: id,
        role: roleType,
        companyId: currentCompanyId
      })
    );
    setStatusResult(response.success);
  };

  return {
    statusTickets,
    loading,
    statusResult,
    roleType,
    roles,
    dispatch,
    getAllDataTickets,
    // getCategoriesTicketThunk,
    // getEmployeeThunk,
    getTableTickets,
    setLoading,
    getTicketsByStatus,
  };
};

export default useTickets;

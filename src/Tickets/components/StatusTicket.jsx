import { Row,  } from "antd";
// import Excel from "../../../../assets/icons/excel.svg";
import { useDispatch, useSelector } from "react-redux";
// import useDownLoadExcel from "../hooks/useDownLoadExcel";
import { useState } from "react";
// import lupa from "../../../../assets/icons/search.svg";
import useTickets from "../hooks/useTickets";
import SvgMesagge from './../UI/SvgMesagge';
import useRedirectTo from "../../hooks/useRedirectTo";
import CustomTable from "../../UI/CustomComponentsAntD/customTables/CustomTable";
import { TicketsThunk, currentTicketPageThunk } from "../../../store/tickets/thunks";

const StatusTicket = ({ status, id, loading, setLoading, loadingTabs }) => {
  const dispatch = useDispatch();
  
  const [skipToExcel, setSkipToExcel] = useState(0);

  const { roleType } = useTickets();
  const { handleRedirectTo } = useRedirectTo();
  // const { getTicketExcel, isDownloadLoading } = useDownLoadExcel();
  const { tickets, quantity, columns, limit } = useSelector((state) => state.tickets.data)

  const currentCompanyId = useSelector((state) => state?.auth?.currentRol)
  const lastSkip = useSelector(state => state.tickets.lastSkip);
  const currentPage = useSelector(state => state.tickets.currentPage);

  const dataSourceTable = [
          {
            id: 85,
            ticket: 'VM-502-0000058',
            date: '3/18/2024',
            time: '10:59:16 AM',
            category: 'Servicio al Cliente (Garantías)',
            messages: 1,
            employee: 'Ramones Garcia'
          },
          {
            id: 81,
            ticket: 'VM-502-0000056',
            date: '2/1/2024',
            time: '9:08:23 AM',
            category: 'Servicio al Cliente (Garantías)',
            messages: 3,
            employee: 'Juan Gutierrez'
          },
          {
            id: 80,
            ticket: 'VM-502-0000055',
            date: '2/1/2024',
            time: '9:06:35 AM',
            category: 'Administración',
            messages: 1,
            employee: 'Fulanito De Tal'
          }
        ]

  const tableDataFilter = Array.isArray(columns)
    ? columns.filter((item) => item.title !== "Mensajes")
    : [];

  const columnsTab = [
    ...tableDataFilter,
    {
      title: `${tableDataFilter.length > 0 ? "Mensajes" : ""}`,
      dataIndex: "messages",
      render: (messages) => (
        <Row justify="center">
          <SvgMesagge numOfMesagges={messages} />
        </Row>
      ),
    },
  ];

  const handleInputChange = async (event) => {
    const value = event.target.value;
    if (value.length % 3 === 0 || value.length === 0) {
      // clearTimeout(searchTimer);
      await dispatch(
        TicketsThunk({
          id: 6,
          role: roleType,
          skip: skipToExcel,
          findId: value,
          companyId: currentCompanyId,

        })
      );
    }
    // const timer = setTimeout(() => {
    // }, 500);
    // setSearchTimer(timer);
  };

  const handlePagination = async ({ pagination, page, last }) => {
    //setCurrentPage(page);
    if (page > 0) {
      setLoading(true);
      const skip = page * 10 - 10;
      setSkipToExcel(skip);

      const pageValue = page || pagination.current;
      const newSkip = pageValue * limit - limit;

      if (newSkip > lastSkip) {
        await dispatch(
          TicketsThunk({
            id:
              id === null && roleType === "admin" ? 9
                : id === null && roleType === "tenant" ? 1
                  : id,
            role: roleType,
            skip: newSkip,
            previousData: tickets,
            companyId: currentCompanyId,
            currentPage: currentPage,
            last
          })
        );
      }
      setLoading(false)
    }
  };

  return (
    <div style={{ background: "white", padding: "24px" }}>
      <Row
        justify="space-between"
        align="middle"
        style={{ paddingBottom: "1.2rem" }}
      >
        <h3 style={{ color: "#8F9997", fontSize: 24 }}>
          TICKETS:
          <span
            style={{
              color: "#16A07F",
              fontSize: "1.5rem",
              marginLeft: "0.5rem",
            }}
          >
            03
          </span>
        </h3>

        {status === "Resuelto" && (
          <Row style={{ width: "25%" }}>
            <div
              style={{
                width: "70%",
                marginRight: "0.5rem",
                position: "relative",
              }}
            >
              <input
                style={{
                  width: "100%",
                  height: "2rem",
                  borderRadius: "5px",
                  border: "1px solid #C9C9C9",
                  padding: "0 0.5rem",
                }}
                type="text"
                placeholder="Buscar Ticket"
                onChange={handleInputChange}
              />
              <img
                style={{ position: "absolute", top: 6, right: "1rem" }}
                alt=""
              />
            </div>
            {/* <Row align="middle">
              <Button
                loading={isDownloadLoading}
                disabled={isDownloadLoading}
                onClick={() => getTicketExcel(skipToExcel, roleType)}
                type="ghost"
                style={{ border: "none" }}
              >
                <img src={Excel} alt="" />
              </Button>
            </Row> */}
          </Row>
        )}
      </Row>
      <CustomTable
        //className="custom-table"              
        isDispatch={true}
        setCurrentPage={currentTicketPageThunk}
        handlePagination={handlePagination}
        onChange={handlePagination}
        totalItems={quantity}
        totalPages={Math.ceil(quantity / limit)}
        currentPage={currentPage}
        columns={columnsTab}
        dataSource={dataSourceTable}
        rowKey={(record) => record.id}
        loading={loading}
        pagination={{
          current: currentPage,
          pageSize: limit,
          total: quantity,
          onChange: handlePagination,
        }}
        onRow={(record, rowIndex) => ({
          onClick: (event) => {
             window.open('https://www.loom.com/share/f101d1f7f1bb4842aa37c00466e11533');
          },
        })}

      />
    </div>
  );
};

export default StatusTicket;

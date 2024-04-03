import { useEffect, useState } from "react";
import { Tabs as AntdTabs, ConfigProvider } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import StatusTicket from "./StatusTicket";
import "../styles.css";
import BadgeTabs from "../UI/BadgeTabs";
import { useSelector } from "react-redux";
import useTickets from "../hooks/useTickets";
import EmptyComponent from './../../UI/CustomComponentsAntD/EmptyComponent';
import { setActiveKey } from "../../../store/tickets/ticketsSlice";

const StatusTickets = () => {
  const {
    statusTickets,
    statusResult,
    loading,
    roleType,
    dispatch,
    setLoading,
    getTableTickets,
    getAllDataTickets,
    // getCategoriesTicketThunk,
    // getEmployeeThunk
  } = useTickets();
  const { activeKey } = useSelector(state => state.tickets)
  const currentCompanyId = useSelector((state) => state?.auth?.currentRol)
  const [idTab, setIdTab] = useState(null);

  const { TabPane } = AntdTabs;

  useEffect(() => {
    getAllDataTickets();
    // dispatch(getCategoriesTicketThunk(currentCompanyId));
    // dispatch(getEmployeeThunk(currentCompanyId));
  }, [roleType]);

  const onChange = async (key) => {
    setLoading(true);
    dispatch(setActiveKey(key))
    const id = await statusTickets.find((item) => item.name === key).id;
    await getTableTickets(id);
    setIdTab(id);
    setLoading(false);
  };

  const EmptyIcon = () => <PlusCircleOutlined/>;
  const emptyTable = () => (
    <EmptyComponent
      height="100%"
      label="No hay tickets"
      Icon={<EmptyIcon />}
    />
  )

  if (!statusResult)
    return (
      <EmptyComponent
        label="Error al cargar los tickets"
        Icon={<EmptyIcon />}
      />
    );

  return (
    <ConfigProvider renderEmpty={emptyTable}>
      <AntdTabs
        className="custom-tabs"
        type="card"
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        tabBarStyle={{ margin: 0 }}
        onChange={onChange}
      >
        {statusTickets?.map((statusTicket) => {
          return (
            <TabPane
              disabled={loading}
              forceRender={true}
              key={statusTicket.name}
              tab={
                <BadgeTabs
                  activeTab={activeKey}
                  statusTicket={statusTicket}
                  badgeCount={statusTicket.totalTicket}
                />
              }
            >
              <StatusTicket
                loading={loading}
                setLoading={setLoading}
                status={statusTicket.name}
                id={idTab}
              />
            </TabPane>
          );
        })}
      </AntdTabs>
    </ConfigProvider>
  );
};

export default StatusTickets;

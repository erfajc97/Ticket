
import './style.css'
import { ConfigProvider, Row, Table } from "antd"
import { useDispatch } from 'react-redux'
import EmptyComponent from '../EmptyComponent';


//Si la clase es custom-ant-table, otra clase ya predefinida en el antdStyles.css, se utiliza en la paginación con total para que los estilos tienen efectos
/* showTotal: (total, range) => {
   return `${range[0]}-${range[1]} de ${total}`;
 }*/


const CustomTable = ({
  className = 'custom-new-table',
  setCurrentPage,// NECESARIO CON LA CLASE custom-new-table
  currentPage,// NECESARIO CON LA CLASE custom-new-table
  handlePagination, // NECESARIO CON LA CLASE custom-new-table
  totalPages, // NECESARIO CON LA CLASE custom-new-table
  totalItems, // NECESARIO CON LA CLASE custom-new-table
  expandedRowKeys,
  handleRowExpand,
  columns,
  dataSource,
  expandable,
  rowKey,
  loading,
  pagination,
  onRow,
  scrollSize,
  onChange = () => { },
  customEmpty,
  isDispatch,
  emptyHeigth = '150px',
  emptyText = 'No hay datos',
  tableName
}) => {
  const dispatch = useDispatch();
  const expandableProperties = {
    ...expandable,
    onExpand: handleRowExpand,
    expandedRowKeys: expandedRowKeys,
  }

  const handleSetPagination = async ({ page, current }) => {
    if (!currentPage || !totalItems || !totalPages || !setCurrentPage || !handlePagination) return
    if (current < 1 || current > totalPages) return

    if (page === 'first') {
      isDispatch ? dispatch(setCurrentPage(1)) : setCurrentPage(1);
      await handlePagination({ page: 1 });
    }
    if (page === 'next' && currentPage < totalPages) {

      isDispatch ? dispatch(setCurrentPage(current)) : setCurrentPage(current)
      await handlePagination({ page: current });
    }
    if (page === 'prev' && current > 0) {
      isDispatch ? dispatch(setCurrentPage(current)) : setCurrentPage(current)
      await handlePagination({ page: current })
    }
    if (page === 'last') {
      isDispatch ? dispatch(setCurrentPage(totalPages)) : setCurrentPage(totalPages)

      await handlePagination({ page: totalPages, last: totalItems })
    }
  }

  const paginationItemRender = (current, type, element) => {
    if (!className.includes('custom-new-table')) return element
    if (type === 'prev') {
      return (<Row className='custom-new-table__btns prev' >
        <span onClick={() => handleSetPagination({ current, page: 'first' })}>Primero</span>
        <span onClick={() => handleSetPagination({ current, page: 'prev' })}>Anterior</span>
      </Row>)
    }
    if (type === 'next') {
      return <Row className='custom-new-table__btns next' >
        <span onClick={() => handleSetPagination({ current, page: 'next' })}>Siguiente</span>
        <span onClick={() => handleSetPagination({ current, page: 'last' })}>Último</span>
      </Row>
    }
    return element
  }

  const emptyTable = () => (
    <EmptyComponent height={emptyHeigth} Icon={<img  />} label={emptyText} />
  )

  return (
    <ConfigProvider renderEmpty={customEmpty ? customEmpty : emptyTable}>
      <Table
        className={className}
        columns={columns}
        expandable={expandableProperties}
        dataSource={dataSource}
        rowKey={rowKey}
        loading={loading}
        onChange={(pagination, filters, sorter) => onChange({ pagination, filters, sorter, tableName })} //Tienen que haber dos funciones diferentes una para controlar la paginación y otra para el onChange propio de la tabla para filtros por ejemplos
        pagination={{ ...pagination, itemRender: (current, type, element) => paginationItemRender(current, type, element), showSizeChanger: false, }}
        onRow={onRow}
        scroll={scrollSize}
      />
    </ConfigProvider>
  )
}

export default CustomTable

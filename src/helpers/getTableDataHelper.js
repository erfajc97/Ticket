export const getTableDataHelper = ({ data, metadata, skip, last, previousData, currentPage, actualLimit }) => {
    let finalData = {}
    if (last) {
        finalData = { ...data }
    }
    else if (!skip) {
        const newData = Array.from(metadata.quantity).fill({});
        data.dataSource.forEach((item, index) => {
            newData[index] = { ...item, key: item.id }
        })
        finalData = { ...data, dataSource: newData, page: 1 }
    }
    else {
        const newData = structuredClone(previousData)
        const initialIndex = currentPage * metadata.limit;
        data.dataSource.forEach((item, index) => {
            newData[initialIndex + index] = { ...item, key: item.id }
        })
        while (newData.length < metadata.quantity) {
            newData.push({})
        }
        finalData = { ...data, dataSource: newData };
    }
    const newMetaData = last ? {
        skip: last,
        limit: actualLimit,//Debe de haber una forma de que el limit se mantenga
        quantity: last,
        rest: 0
    } : metadata

    const tableData = { data: finalData, metadata: newMetaData }
    return tableData
}


//TESTING ONLY
// const _handleChangeTable = async ({ pagination, filters, sorter, last, page }) => {
//     const pageValue = page || pagination.current;
//     const newSkip = pageValue * limitTable - limitTable;

//     const newParams = { ...currentParams }
//     pagination?.current && setCurrentPageTable(pageValue);
//     if (newSkip > lastSkip) {
//         await getAllTaskService({ token: auth.idToken, formData: newParams, skip: newSkip, last });
//     }
// }

//ESTADOS NECESARIOS (Si son useStates)
/*
const [tasks, setTasks] = useState() //La data de la tabla
const [currentPageTable, setCurrentPageTable] = useState()
const [lastSkip, setLastSkip] = useState()
const [{limit: limitTable, quantity: quantityTable}, setMetaDataTable] = useState()
const [currentParams, setCurrentParams] = useState() //Opcional, no es necesario
*/

//PROPIEDADES QUE SE LE PASAN A LA CUSTOMTABLE
/*
  setCurrentPage,// NECESARIO CON LA CLASE custom-new-table
  currentPage,// NECESARIO CON LA CLASE custom-new-table
  handlePagination, // NECESARIO CON LA CLASE custom-new-table
  totalPages, // NECESARIO CON LA CLASE custom-new-table
  totalItems, // NECESARIO CON LA CLASE custom-new-table
*/
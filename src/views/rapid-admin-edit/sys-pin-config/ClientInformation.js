import React, { useEffect, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPagination,
  CPaginationItem
} from '@coreui/react';
import '../../../scss/sys-prin-configuration/client-information.scss'; // Import external CSS file

const Tables = ({ onRowClick }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowId, setSelectedRowId] = useState(null); // Track selected row
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate fetching JSON data
    const fetchData = async () => {
      const jsonData = [
        { id: 1, clientId: '001', name: 'Mark Otto', address: '123 Main St', state: 'New Jersey', city: 'Jersey City', phone: '415-677-3255', contact: 'Johone Bill', active: true, billingSysPin: "billingSysPin 1", zip: 19404 },
        { id: 2, clientId: '002', name: 'Jacob Thornton', address: '456 Elm St', state: 'New Jersey', city: 'Jersey City', phone: '415-677-3255', contact: 'Johone Bill', active: true, billingSysPin: "billingSysPin 2", zip: 19405},
        { id: 3, clientId: '003', name: 'Larry Bird', address: '789 Oak St', state: 'New Jersey', city: 'Jersey City', phone: '415-677-3255', contact: 'Johone Bill', active: false, billingSysPin: "billingSysPin 3", zip: 19406  },
        { id: 4, clientId: '004', name: 'John Doe', address: '321 Pine St', state: 'New Jersey', city: 'Jersey City', phone: '415-677-3255', contact: 'Johone Bill', active: false, billingSysPin: "billingSysPin 4" , zip: 19407  },
        { id: 5, clientId: '005', name: 'Jane Smith', address: '654 Cedar St', state: 'New Jersey', city: 'Jersey City', phone: '415-677-3255', contact: 'Johone Bill', active: true, billingSysPin: "billingSysPin 5" , zip: 19408   },
        { id: 6, clientId: '006', name: 'Alice Johnson', address: '987 Birch St', state: 'New Jersey', city: 'Jersey City', phone: '415-677-3255', contact: 'Johone Bill', active: true, billingSysPin: "billingSysPin 6", zip: 19409  }
      ];
      setTableData(jsonData);
    };

    fetchData();
  }, []);

  // Calculate indexes for slicing data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Handle row click
  const handleRowClick = (row) => {
    setSelectedRowId(row.id);
    onRowClick(row);
  };

  return (
    <>
      {/* Existing Table */}
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: '#8A2BE2', color: 'white' }}> {/* Violet */}
             <strong>Sys Prins Clients</strong>
          </CCardHeader>

            <CCardBody>
              <CTable hover className="table">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA' }}>#</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA' }}>Client ID</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA' }}>Name</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA' }}>Address</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {currentItems.map((row) => (
                    <CTableRow
                      key={row.id}
                      className={`table-row ${selectedRowId === row.id ? 'active-row' : ''}`} // Apply class when active
                      onClick={() => handleRowClick(row)}
                    >
                      <CTableHeaderCell>{row.id}</CTableHeaderCell>
                      <CTableDataCell>{row.clientId}</CTableDataCell>
                      <CTableDataCell>{row.name}</CTableDataCell>
                      <CTableDataCell>{row.address}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>

              {/* Pagination Controls */}
              <CPagination align="center" className="mt-3">
                <CPaginationItem
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="pagination-button"
                >
                  Previous
                </CPaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <CPaginationItem
                    key={i + 1}
                    active={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                    className="pagination-button"
                  >
                    {i + 1}
                  </CPaginationItem>
                ))}
                <CPaginationItem
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="pagination-button"
                >
                  Next
                </CPaginationItem>
              </CPagination>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Tables;

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
  CPaginationItem,
  CFormInput,
  CFormCheck
} from '@coreui/react';
import '../../../scss/sys-prin-configuration/client-information.scss'; // Import external CSS file


const ClientInformation = ({ onRowClick }) => {

  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const itemsPerPage = 5;

  // Sorting state
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    // Fetching JSON data
    const fetchData = async () => {
      const clientData = [
        { client: "CLIENT1", name: "Alpha Corp", address: "123 Main St", city: "New York", state: "NY", zip: "10001", contact: "John Doe", phone: "123-456-7890", active: true },
        { client: "CLIENT2", name: "Beta Inc", address: "456 Elm St", city: "Los Angeles", state: "CA", zip: "90001", contact: "Jane Smith", phone: "234-567-8901", active: false },
        { client: "CLIENT3", name: "Gamma Ltd", address: "789 Oak St", city: "Chicago", state: "IL", zip: "60601", contact: "Alice Brown", phone: "345-678-9012", active: false },
        { client: "CLIENT4", name: "Delta LLC", address: "321 Pine St", city: "Houston", state: "TX", zip: "77001", contact: "Robert Johnson", phone: "456-789-0123", active: true },
        { client: "CLIENT5", name: "Epsilon Enterprises", address: "654 Cedar St", city: "Phoenix", state: "AZ", zip: "85001", contact: "Michael Wilson", phone: "567-890-1234", active: false },
        { client: "CLIENT6", name: "Zeta Solutions", address: "987 Birch St", city: "Philadelphia", state: "PA", zip: "19101", contact: "Emily Davis", phone: "678-901-2345", active: true },
      ];

      setTableData(clientData);
    };

    fetchData();
  }, []);

  // Sorting Function
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setTableData(sortedData);
  };

  // Search Filter
  const filteredData = tableData.filter(row =>
    row.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Handle Row Click
    const handleRowClick = (row) => {
      setSelectedRowId(row.client);
      localStorage.setItem("selectedClient", row.client); // Save to localStorage  
      const storedClient = localStorage.getItem("selectedClient");
      onRowClick(row);
    };

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader style={{ backgroundColor: '#8A2BE2', color: 'white' }}>
              <strong>Sys Prins Clients</strong>
            </CCardHeader>

            <CCardBody>
              {/* Search Input */}
              <CFormInput
                type="text"
                placeholder="Search by Client ID, Name, Address..."
                className="mb-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Table */}
              <CTable hover className="table">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA' }}>#</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', cursor: 'pointer' }} onClick={() => handleSort('client')}>
                      Client ID {sortConfig.key === 'client' ? (sortConfig.direction === 'asc' ? '⬆' : '⬇') : ''}
                    </CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', cursor: 'pointer' }} onClick={() => handleSort('name')}>
                      Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '⬆' : '⬇') : ''}
                    </CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', cursor: 'pointer' }} onClick={() => handleSort('address')}>
                      Address {sortConfig.key === 'address' ? (sortConfig.direction === 'asc' ? '⬆' : '⬇') : ''}
                    </CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA' }}>Status</CTableHeaderCell> {/* New Column */}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {currentItems.map((row, index) => (
                    <CTableRow
                      key={row.client}
                      className={`table-row ${selectedRowId === row.client ? 'active-row' : ''}`}
                      onClick={() => handleRowClick(row)}
                    >
                      <CTableHeaderCell>{index + 1 + indexOfFirstItem}</CTableHeaderCell>
                      <CTableDataCell>{row.client}</CTableDataCell>
                      <CTableDataCell>{row.name}</CTableDataCell>
                      <CTableDataCell>{row.address}</CTableDataCell>
                      <CTableDataCell>
                        <CFormCheck checked={row.active} disabled /> {/* Checkbox for Status */}
                      </CTableDataCell>
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

export default ClientInformation;

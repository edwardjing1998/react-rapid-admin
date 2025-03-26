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
  CFormSelect,
  CFormInput
} from '@coreui/react';
import '../../../scss/sys-prin-configuration/client-information.scss';

const ClientReport = ({ onRowClick }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const itemsPerPage = 5;

  useEffect(() => {
    const clientData = [
      { reportName: "CLIENT1", receive: "Yes", destination: "Dropbox", fileText: "CSV", email: "Yes", password: "123456" },
      { reportName: "CLIENT2", receive: "No", destination: "Dropbox", fileText: "PDF", email: "No", password: "abcdef" },
      { reportName: "CLIENT3", receive: "Yes", destination: "Dropbox", fileText: "Excel", email: "Yes", password: "pass789" },
      { reportName: "CLIENT4", receive: "No", destination: "Dropbox", fileText: "CSV", email: "No", password: "secure!" },
      { reportName: "CLIENT5", receive: "Yes", destination: "Dropbox", fileText: "PDF", email: "Yes", password: "pwd123" },
      { reportName: "CLIENT6", receive: "No", destination: "Dropbox", fileText: "Excel", email: "No", password: "hello@1" },
    ];
    setTableData(clientData);
  }, []);

  const filteredData = tableData;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleRowClick = (row) => {
    setSelectedRowId(row.reportName);
    localStorage.setItem("selectedClient", row.reportName);
    onRowClick(row);
  };

  const handleReceiveChange = (index, value) => {
    const updatedData = [...tableData];
    const globalIndex = indexOfFirstItem + index;
    updatedData[globalIndex].receive = value;
    setTableData(updatedData);
  };

  const handleDestinationChange = (index, value) => {
    const updatedData = [...tableData];
    const globalIndex = indexOfFirstItem + index;
    updatedData[globalIndex].destination = value;
    setTableData(updatedData);
  };

  const handleFileTextChange = (index, value) => {
    const updatedData = [...tableData];
    const globalIndex = indexOfFirstItem + index;
    updatedData[globalIndex].fileText = value;
    setTableData(updatedData);
  };

  const handleEmailChange = (index, value) => {
    const updatedData = [...tableData];
    const globalIndex = indexOfFirstItem + index;
    updatedData[globalIndex].email = value;
    setTableData(updatedData);
  };

  const handlePasswordChange = (index, value) => {
    const updatedData = [...tableData];
    const globalIndex = indexOfFirstItem + index;
    updatedData[globalIndex].password = value;
    setTableData(updatedData);
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
              <CTable hover className="table">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', width: '50px' }}>#</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', width: '200px' }}>Report Name</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', width: '100px' }}>Receive</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', width: '100px' }}>Destination</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', width: '100px' }}>File Text</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', width: '100px' }}>Email</CTableHeaderCell>
                    <CTableHeaderCell style={{ backgroundColor: '#E6E6FA', width: '100px' }}>Password</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {currentItems.map((row, index) => (
                    <CTableRow
                      key={row.reportName}
                      className={`table-row ${selectedRowId === row.reportName ? 'active-row' : ''}`}
                      onClick={() => handleRowClick(row)}
                    >
                      <CTableHeaderCell style={{ verticalAlign: 'middle' }}>{index + 1 + indexOfFirstItem}</CTableHeaderCell>
                      <CTableDataCell style={{ verticalAlign: 'middle' }}>{row.reportName}</CTableDataCell>
                      <CTableDataCell>
                        <CFormSelect
                          value={row.receive}
                          onChange={(e) => handleReceiveChange(index, e.target.value)}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </CFormSelect>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormSelect
                          value={row.destination}
                          onChange={(e) => handleDestinationChange(index, e.target.value)}
                        >
                          <option value="Dropbox">Dropbox</option>
                          <option value="Google Drive">Google Drive</option>
                          <option value="OneDrive">OneDrive</option>
                          <option value="Box">Box</option>
                        </CFormSelect>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormSelect
                          value={row.fileText}
                          onChange={(e) => handleFileTextChange(index, e.target.value)}
                        >
                          <option value="CSV">CSV</option>
                          <option value="Excel">Excel</option>
                          <option value="PDF">PDF</option>
                        </CFormSelect>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormSelect
                          value={row.email}
                          onChange={(e) => handleEmailChange(index, e.target.value)}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </CFormSelect>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput
                          type="password"
                          value={row.password}
                          onChange={(e) => handlePasswordChange(index, e.target.value)}
                        />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>

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

export default ClientReport;

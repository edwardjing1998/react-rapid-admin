import React, { useState, useMemo } from 'react';
import {
  CCard, CCardBody, CForm, CFormLabel, CFormInput, CFormSelect,
  CFormCheck, CRow, CCol, CButton
} from '@coreui/react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import './ProductivityReport.scss';
import { ProductivityData } from './data.js';

ModuleRegistry.registerModules([AllCommunityModule]);

const ProductivityReport = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reportType, setReportType] = useState('daily');
  const [designOption, setDesignOption] = useState('user-074');
  const [userId, setUserId] = useState('');
  const [bulkCardDestroys, setBulkCardDestroys] = useState(false);

  const handlePrint = () => {
    console.log('Print Report:', {
      fromDate,
      toDate,
      reportType,
      designOption,
      userId,
      bulkCardDestroys,
    });
    window.print();
  };

  const handleCancel = () => {
    setFromDate('');
    setToDate('');
    setReportType('daily');
    setDesignOption('');
    setUserId('');
    setBulkCardDestroys(false);
  };

  const columnDefs = useMemo(() => [
    { field: 'fromDate', headerName: 'From Date', sortable: true, filter: true },
    { field: 'toDate', headerName: 'To Date', sortable: true, filter: true },
    { field: 'mailedCount', headerName: 'Mailed Count', sortable: true, filter: true },
    { field: 'returnedCount', headerName: 'Returned Count', sortable: true, filter: true },
    { field: 'destroyedCount', headerName: 'Destroyed Count', sortable: true, filter: true },
    { field: 'specialCount', headerName: 'Special Count', sortable: true, filter: true },
  ], []);

  const rowData = useMemo(() => {
    return designOption ? ProductivityData[designOption] || [] : [];
  }, [designOption]);

  return (
    <div className="productivity-report-wrapper">
      <CCard>
        <CCardBody>
          <h5 className="mb-4">Productivity Report Print</h5>

          <CForm>
            <CRow>
              {/* Left Column */}
              <CCol md={6}>
                <div className="mb-3">
                  <CFormLabel htmlFor="fromDate">From Date</CFormLabel>
                  <CFormInput
                    type="date"
                    id="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="toDate">To Date</CFormLabel>
                  <CFormInput
                    type="date"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel>Productivity Report</CFormLabel>
                  <div>
                    <CFormCheck
                      inline
                      type="radio"
                      name="reportType"
                      label="Daily"
                      value="daily"
                      checked={reportType === 'daily'}
                      onChange={(e) => setReportType(e.target.value)}
                    />
                    <CFormCheck
                      inline
                      type="radio"
                      name="reportType"
                      label="Summary - Multi Days"
                      value="summary"
                      checked={reportType === 'summary'}
                      onChange={(e) => setReportType(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="designOption">User ID</CFormLabel>
                  <CFormSelect
                    id="designOption"
                    value={designOption}
                    onChange={(e) => setDesignOption(e.target.value)}
                  >
                    <option value="">-- Select User --</option>
                    <option value="user-074">User 74</option>
                  </CFormSelect>
                </div>

                <div className="mb-3">
                  <CFormCheck
                    type="checkbox"
                    id="bulkCardDestroys"
                    label="Bulk Card Destroys"
                    checked={bulkCardDestroys}
                    onChange={(e) => setBulkCardDestroys(e.target.checked)}
                  />
                </div>

                <div className="d-flex justify-content-end gap-2">
                  <CButton color="primary" onClick={handlePrint}>Print</CButton>
                  <CButton color="secondary" onClick={handleCancel}>Cancel</CButton>
                </div>
              </CCol>

              {/* Right Column (Empty) */}
              <CCol md={6}></CCol>
            </CRow>

            <CRow className="mt-4">
              <CCol md={12}>
                {rowData && rowData.length > 0 ? (
                  <div className="ag-theme-quartz" style={{ height: 400, width: '100%' }}>
                    <AgGridReact
                      key={designOption}
                      rowData={rowData}
                      columnDefs={columnDefs}
                      pagination={true}
                      paginationPageSize={10}
                      defaultColDef={{ flex: 1, minWidth: 100, resizable: true }}
                    />
                  </div>
                ) : (
                  <p className="text-center mt-3">No data available. Please select a user to view the report.</p>
                )}
              </CCol>
            </CRow>

          </CForm>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default ProductivityReport;

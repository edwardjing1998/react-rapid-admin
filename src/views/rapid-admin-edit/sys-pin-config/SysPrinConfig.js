import React, { useState, useEffect, useRef } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs
} from '@coreui/react';

import ClientInformation from './ClientInformation.js';
import ClientInformationContent from './ClientInformationContent.js';
import ClientATMCashPrefixes from './ClientATMCashPrefixes.js';
import SysPrin from './SysPrin.js';
import ClientReport from './ClientReport.js';
import ClientEmailSetup from './ClientEmailSetup.js';

import CIcon from '@coreui/icons-react';
import { cilChevronRight, cilChevronBottom } from '@coreui/icons';


const SysPinConfig = () => {
  const [selectedData, setSelectedData] = useState({
    client: '',
    name: '',
    address: ''
  });

  const handleRowClick = (rowData) => {
    setSelectedData(rowData);
  };

  return (
    <CRow className="align-items-stretch" style={{ height: 'calc(100vh - 100px)' }}>
      {/* Left: ClientInformation spans full height */}
      <CCol xs={4}>
          <ClientInformation onRowClick={handleRowClick} />
      </CCol>

      {/* Right: stacked tab section and sysprin */}
      <CCol xs={8} className="d-flex flex-column">
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <CCard className="mb-3 flex-grow-1">
          <CTabs activeItemKey="clientInformation">
                <CTabList variant="pills">
                  <CTab itemKey="clientInformation">Client Information</CTab>
                  <CTab itemKey="clientATMCashPrefixes">Client ATM/Cash Prefixes</CTab>
                  <CTab itemKey="clientEmailSetup">Client Email Setup</CTab>
                  <CTab itemKey="clientReports">Client Reports</CTab>
                </CTabList>
                <CTabContent>
                  <CTabPanel className="p-3" itemKey="clientInformation">
                    <ClientInformationContent selectedData={selectedData} />
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="clientATMCashPrefixes">
                    <ClientATMCashPrefixes />
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="clientEmailSetup">
                    <ClientEmailSetup />
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="clientReports">
                    <ClientReport />
                  </CTabPanel>
                </CTabContent>
              </CTabs>
          </CCard>
          <CCard>
              <SysPrin />
          </CCard>
        </div>
      </CCol>
    </CRow>
  );
};

export default SysPinConfig;

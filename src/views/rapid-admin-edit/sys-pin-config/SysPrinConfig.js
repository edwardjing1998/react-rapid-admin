import React, { useState } from 'react';
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
import ClientInformation from './ClientInformation.js';  // Import the ClientInformation component
import ClientInformationContent from './ClientInformationContent.js'; // Import new Client Information Content component
import ClientATMCashPrefixes from './ClientATMCashPrefixes.js'; // Import new Client Information Content component
import SysPrin from './SysPrin.js';
import ClientReport from './ClientReport.js';
import ClientEmailSetup from './ClientEmailSetup.js';


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
    <CRow>
      {/* Place ClientInformation component at the top */}
      <CCol xs={12}>
        <ClientInformation onRowClick={handleRowClick} />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: '#E6E6FA', color: 'black' }}> {/* Violet */}
             <strong>Detailed information of Client</strong>
          </CCardHeader>
          <CCardBody>
            {/*<DocsExample href="components/tabs/#example">*/}
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
           {/* </DocsExample> */}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <SysPrin />
      </CCol>
    </CRow>
  );
};

export default SysPinConfig;

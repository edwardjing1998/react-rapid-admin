import React, { useState, useEffect } from 'react';
import {
  CRow,
  CCol,
  CCard,
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

const SysPinConfig = () => {
  const [clientList, setClientList] = useState([]);
  const [selectedData, setSelectedData] = useState({
    client: '',
    name: '',
    address: '',
    billingSp: '',
    atmCashRule: '',
    sysPrinsPrefixes: [],
  });

  useEffect(() => {
    fetch('http://localhost:4444/api/clients')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch clients');
        }
        return response.json(); // ✅ read once and return
      })
      .then((data) => {
        console.log("Fetched data:", data);  // ✅ Use console.log to inspect
        setClientList(data);
      })
      .catch((error) => {
        console.error('Error fetching clients:', error);
      });
  }, []);
  

  const handleRowClick = (rowData) => {
    const billingSp = rowData.billingSp || '';
    const matchedClient = clientList.find((client) => client.billingSp === billingSp);
    const atmCashPrefixes = matchedClient?.sysPrinsPrefixes || [];

    setSelectedData((prev) => ({
      ...prev,
      ...rowData,
      sysPrinsPrefixes: atmCashPrefixes,
    }));
  };

  return (
    <CRow className="align-items-stretch" style={{ height: 'calc(100vh - 100px)' }}>
      <CCol xs={4}>
        <ClientInformation onRowClick={handleRowClick} clientList={clientList} />
      </CCol>

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
                  <ClientATMCashPrefixes selectedData={selectedData} />
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

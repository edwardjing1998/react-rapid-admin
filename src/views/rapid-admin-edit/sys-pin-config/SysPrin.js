import React, { useState, useEffect } from 'react'
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
  CTabs,
  CFormInput,
  CButton,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'
import SysPrinGeneral from './SysPrinGeneral.js';
import ReMailOptions from './ReMailOptions.js';
import StatusOptions from './StatusOptions.js';
import Notes from './Notes.js';


const SysPrin = ({selectedClient}) => {

  const storedClient = localStorage.getItem("selectedClient");
  const [sysPin, setSysPin] = useState('');

  const [custType, setCustType] = useState('');
  const [returnStatus, setReturnStatus] = useState('');
  const [destroyStatus, setDestroyStatus] = useState('');

  const sysPrinsData = [
    {
      "sysPrin": "SYS001",
      "client": "CLIENT1",
      "custType": "TypeA",
      "returnStatus": "Return Status 1",
      "destroyStatus": "Destroy Status 1"
    },
    {
      "sysPrin": "SYS002",
      "client": "CLIENT2",
      "custType": "TypeB",
      "returnStatus": "Return Status 2",
      "destroyStatus": "Destroy Status 2"
    },
    {
      "sysPrin": "SYS003",
      "client": "CLIENT3",
      "custType": "TypeC",
      "returnStatus": "Return Status 3",
      "destroyStatus": "Destroy Status 3"
    }
  ];

  const handleSearch = () => {
    const result = sysPrinsData.find(item => item.sysPrin === sysPin);
    if (result) {
      setCustType(result.custType);
      setReturnStatus(result.returnStatus);
      setDestroyStatus(result.destroyStatus);
    } else {
      setCustType('');
      setReturnStatus('');
      setDestroyStatus('');
    }
  };

  return (
    <CRow className="justify-content-center align-items-center">
      <CCol xs={12}>
        <DocsComponents href="components/tabs/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tabs</strong>
          </CCardHeader>
          <CCardBody>


            {/* Input Field with Title and Button */}
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">

            {/* ✅ Added new input field for Selected Client ID */}
             <strong>Selected Client Id:</strong>
              <CFormInput 
                type="text" 
                placeholder="Selected Client Id" 
                className="w-50 text-center"
                value={storedClient || ''}  // ✅ Display selectedClient
                readOnly
              />

              <strong>Input Sys/Pin:</strong>
              <CFormInput 
                type="text" 
                placeholder="Enter Sys/Pin here..." 
                className="w-50 text-center"
                value={sysPin}
                onChange={(e) => setSysPin(e.target.value)}
              />
              <CButton color="primary" onClick={handleSearch}>Submit</CButton>
            </div>

            <DocsExample href="components/tabs/#example">
              <CTabs activeItemKey="general">
                <CTabList variant="pills">
                  <CTab itemKey="general">General</CTab>
                  <CTab itemKey="re-mail-options">Re-Mail Options</CTab>
                  <CTab itemKey="status-options">Status Options</CTab>
                  <CTab itemKey="notes">Notes</CTab>
                  <CTab itemKey="file-sent-to">File Sent to</CTab>
                  <CTab itemKey="file-recived-from">File Sent from</CTab>
                </CTabList>
                <CTabContent>
                  <CTabPanel className="p-3" itemKey="general">
                    <SysPrinGeneral 
                      custType={custType} 
                      setCustType={setCustType}
                      returnStatus={returnStatus} 
                      setReturnStatus={setReturnStatus}
                      destroyStatus={destroyStatus} 
                      setDestroyStatus={setDestroyStatus}
                    />
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="re-mail-options">
                    <ReMailOptions />
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="status-options">
                    <StatusOptions />
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="notes">
                    <Notes />
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="file-sent-to">
                    File Sent to Options
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="file-recived-from">
                    File Sent from tab content
                  </CTabPanel>
                </CTabContent>
              </CTabs>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SysPrin;

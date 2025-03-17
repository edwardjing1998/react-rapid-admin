import React from 'react'
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
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'
import SysPrinGeneral from './SysPrinGeneral.js';
import ReMailOptions from './ReMailOptions.js';
import StatusOptions from './StatusOptions.js';
import Notes from './Notes.js';

const Navs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/tabs/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tabs</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The basic React tabs example uses the <code>variant=&#34;tabs&#34;</code> props to
              generate a tabbed interface.
            </p>
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
                    <SysPrinGeneral />
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
                  File Sent from   tab content
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

export default Navs
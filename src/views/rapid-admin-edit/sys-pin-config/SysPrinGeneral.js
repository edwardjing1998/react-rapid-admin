import React from 'react'
import { 
  CCard, 
  CCardBody, 
  CCardHeader, 
  CCol, 
  CFormSelect, 
  CRow, 
  CFormInput, 
  CFormCheck
} from '@coreui/react'
import { DocsExample } from '../../../components'
import '../../../scss/sys-prin-configuration/client-atm-pin-prefixes.scss'; // Import custom styles

const Select = () => {
  return (
    <CRow className="d-flex align-items-stretch"> {/* Ensures equal height for both columns */}

      {/* First Column (Full Height) - 5 Dropdowns evenly distributed */}
      <CCol xs={6} className="d-flex"> {/* Ensures both columns stretch equally */}
        <CCard className="mb-4 w-100 h-100"> {/* Ensures full height */}
          <CCardBody className="d-flex flex-column h-100 gap-3"> {/* Allows full height stretch */}

            {/* Customer Type */}
            <div className="d-flex flex-grow-1 align-items-center">
              <CFormSelect id="customer-type" aria-label="Customer Type">
                <option>Choose Customer Type</option>
                <option value="1">Individual</option>
                <option value="2">Business</option>
                <option value="3">Other</option>
              </CFormSelect>
            </div>

            {/* Return Status */}
            <div className="d-flex flex-grow-1 align-items-center">
              <CFormSelect id="return-status" aria-label="Return Status">
                <option>Choose Return Status</option>
                <option value="1">Pending</option>
                <option value="2">Approved</option>
                <option value="3">Rejected</option>
              </CFormSelect>
            </div>

            {/* Destroy Status */}
            <div className="d-flex flex-grow-1 align-items-center">
              <CFormSelect id="destroy-status" aria-label="Destroy Status">
                <option>Choose Destroy Status</option>
                <option value="1">Not Destroyed</option>
                <option value="2">Destroyed</option>
                <option value="3">In Process</option>
              </CFormSelect>
            </div>

            {/* Special */}
            <div className="d-flex flex-grow-1 align-items-center">
              <CFormSelect id="special" aria-label="Special">
                <option>Choose Special Option</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </CFormSelect>
            </div>

            {/* Pin Mailer */}
            <div className="d-flex flex-grow-1 align-items-center">
              <CFormSelect id="pin-mailer" aria-label="Pin Mailer">
                <option>Choose Pin Mailer</option>
                <option value="1">Printed</option>
                <option value="2">Not Printed</option>
              </CFormSelect>
            </div>

          </CCardBody>
        </CCard>
      </CCol>

      {/* Second Column (Two Rows) */}
      <CCol xs={6} className="d-flex flex-column h-100"> {/* Ensures full height for second column */}
        
        {/* First Row: 5 Checkboxes (With Background Matching Second Row) */}
        <CCard className="mb-4 w-100 flex-grow-1"> {/* Matches background of second row */}
          <CCardBody className="d-flex flex-column gap-3">
            <CFormCheck type="checkbox" id="sys-prin-active" label="Sys/PRIN Active" />
            <CFormCheck type="checkbox" id="rps-customer" label="RPS Customer" />
            <CFormCheck type="checkbox" id="flag-undeliverable" label="Flag Undeliverable a Invalid Address" />
            <CFormCheck type="checkbox" id="status-research" label="A Status accounts going in Research" />
            <CFormCheck type="checkbox" id="perform-non-mon" label="Perform Non Mon 13 on Destroy" />
          </CCardBody>
        </CCard>

        {/* Second Row: Checkbox and Input Field */}
        <CCard className="mb-4 w-100 flex-grow-1"> {/* Ensures same height */}
          <CCardHeader>
            <strong>Options</strong> <small>Additional Settings</small>
          </CCardHeader>
          <CCardBody className="d-flex flex-column h-100 gap-3"> {/* Allows full height stretch */}
            
            {/* Checkbox: Active */}
            <CFormCheck type="checkbox" id="active" label="Active" />

            {/* Text Input: Memo Type */}
            <CFormInput 
              type="text" 
              placeholder="Memo Type" 
            />

            {/* Text Input: Filter ID */}
            <CFormInput 
              type="text" 
              placeholder="Filter ID" 
            />
            
          </CCardBody>
        </CCard>

      </CCol>

    </CRow>
  )
}

export default Select

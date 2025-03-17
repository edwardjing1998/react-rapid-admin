import React from 'react'
import { 
  CCard, 
  CCardBody, 
  CCardHeader, 
  CCol, 
  CFormSelect, 
  CRow, 
  CFormInput, 
  CButton 
} from '@coreui/react'
import { DocsExample } from '../../../components'
import '../../../scss/sys-prin-configuration/client-atm-pin-prefixes.scss'; // Import custom styles

const Select = () => {
  return (
    <CRow className="d-flex justify-content-between align-items-stretch"> {/* Ensures equal height */}

      {/* Left Column: Evenly Distributed Text Fields and Select Boxes */}
      <CCol xs={6} className="d-flex justify-content-start">
        <CCard className="mb-4 w-100 h-100 d-flex"> {/* Ensures same height */}
          <CCardBody className="d-flex flex-column h-100 justify-content-between"> {/* Evenly distributes elements */}
            
            {/* Days to Hold Temp Aways */}
            <CFormInput 
              type="text" 
              placeholder="Days to Hold Temp Aways"
            />

            {/* Temp Away Re-Mail Trys */}
            <CFormInput 
              type="text" 
              placeholder="Temp Away Re-Mail Trys"
            />

            {/* Unable to Deliver */}
            <CFormSelect aria-label="Unable to Deliver">
              <option>Unable to Deliver</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </CFormSelect>

            {/* Non U.S. Address */}
            <CFormSelect aria-label="Non U.S. Address">
              <option>Non U.S. Address</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </CFormSelect>

            {/* New Address is P.O. Box */}
            <CFormSelect aria-label="New Address is P.O. Box">
              <option>New Address is P.O. Box</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </CFormSelect>

            {/* Invalid State */}
            <CFormSelect aria-label="Invalid State">
              <option>Invalid State</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </CFormSelect>

          </CCardBody>
        </CCard>
      </CCol>
      
      {/* Right Column: Multiple Select (Decreased Height to Fit 8 Records) */}
      <CCol xs={6} className="d-flex justify-content-end">
        <CCard className="mb-4 w-100" style={{ height: '400px' }}> {/* Adjusted height */}
          <CCardBody className="d-flex flex-column h-100"> {/* Allows full height stretch */}
            <p className="text-body-secondary small">
              The <code>multiple</code> attribute is also supported:
            </p>
            <DocsExample href="forms/select#sizing">
            <CFormSelect 
                size="lg" 
                multiple 
                aria-label="Multiple select example" 
                style={{ height: '230px', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}> 
                {/* Adjusted height and font */}
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
              </CFormSelect>
            </DocsExample>
            {/* Push content to the bottom */}
            <div className="flex-grow-1"></div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Buttons - OK, Add, Delete (Fix Heavy Click Effect) */}
      <CCol xs={12} className="d-flex justify-content-center gap-3 mt-3">
        <CButton 
          color="outline-primary" 
          className="no-click-effect"
          onMouseDown={(e) => e.preventDefault()}
        >OK</CButton>

        <CButton 
          color="outline-success" 
          className="no-click-effect"
          onMouseDown={(e) => e.preventDefault()}
        >Add</CButton>

        <CButton 
          color="outline-danger" 
          className="no-click-effect"
          onMouseDown={(e) => e.preventDefault()}
        >Delete</CButton>
      </CCol>

    </CRow>
  )
}

export default Select

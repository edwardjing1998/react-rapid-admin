import React from 'react'
import { 
  CCard, 
  CCardBody, 
  CCardHeader,
  CFormLabel, 
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
      
      {/* Left-aligned Multiple Select with Same Height */}
      <CCol xs={6} className="d-flex justify-content-start">
        <CCard className="mb-4 w-100 h-100"> {/* Ensures same height */}
          <CCardBody className="d-flex flex-column h-100"> {/* Allows full height stretch */}
            <p className="text-body-secondary small" style={{ fontSize: '0.97rem' }}>  {/* Set font size */}
              <span>Billing Sys/Pin: <code>123456789</code></span>
            </p>
            
            {/* Set full height */}
            <CFormSelect 
              size="lg" 
              multiple 
              aria-label="Multiple select example"
              className="h-100" style={{ fontSize: '0.97rem' }}>
              <option value="1">123456</option>
              <option value="2">1234567</option>
              <option value="3">12345678</option>
              <option value="4">123456</option>
              <option value="5">1234567</option>
              <option value="6">12345678</option>
              <option value="7">123456</option>
              <option value="8">1234567</option>
              <option value="9">12345678</option>
            </CFormSelect>

            {/* Push content to the bottom */}
            <div className="flex-grow-1"></div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Right-aligned Select with One Additional Text Field - Same Height */}
      <CCol xs={6} className="d-flex justify-content-end">
        <CCard className="mb-4 w-100 h-100"> {/* Ensures same height */}

          <CCardBody className="d-flex flex-column h-100"> {/* Allows full height stretch */}

            {/* First Row - Account Prefix */}
            <CFormLabel htmlFor="floatingInputGrid"  style={{ fontSize: '0.87rem' }}>Account Prefix</CFormLabel>          
            <div className="d-flex flex-column gap-4">
                {/* Additional Text Field */}
                <CFormInput type="text" />                
            </div>

            {/* Second Row - Select Box */}
            <span style={{ display: "block", height: "10px" }}>&nbsp;</span>
            <CFormLabel htmlFor="floatingInputGrid" style={{ fontSize: '0.87rem' }}>ATM/Cash</CFormLabel>
            <CFormSelect aria-label="Default select example" className="mb-4">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>

            {/* Third Row - Buttons (Moved Here) */}
            <div className="d-flex justify-content-center gap-3 mt-3">
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
            </div>

            {/* Push content to the bottom */}
            <div className="flex-grow-1"></div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Select

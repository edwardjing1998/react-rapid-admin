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
      
      {/* Left-aligned Multiple Select with Same Height */}
      <CCol xs={6} className="d-flex justify-content-start">
        <CCard className="mb-4 w-100 h-100"> {/* Ensures same height */}
          <CCardBody className="d-flex flex-column h-100"> {/* Allows full height stretch */}
            <p className="text-body-secondary small">
              The <code>multiple</code> attribute is also supported:
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" multiple aria-label="Multiple select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
            {/* Push content to the bottom */}
            <div className="flex-grow-1"></div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Right-aligned Select with One Additional Text Field - Same Height */}
      <CCol xs={6} className="d-flex justify-content-end">
        <CCard className="mb-4 w-100 h-100"> {/* Ensures same height */}
          <CCardHeader>
            <strong>React Select</strong> <small>Default</small>
          </CCardHeader>
          <CCardBody className="d-flex flex-column h-100"> {/* Allows full height stretch */}
            <div className="d-flex flex-column gap-4">
              <DocsExample href="forms/select">
                
                {/* Select Box */}
                <CFormSelect aria-label="Default select example" className="mb-4">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>

                {/* Additional Text Field */}
                <CFormInput 
                  type="text" 
                  placeholder="Enter First Text Field" 
                />
              </DocsExample>
            </div>
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

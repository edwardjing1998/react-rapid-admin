import React, { useEffect } from 'react'

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


const ReMailOptions = ({ nonUS, setNonUS, poBox, setPoBox, undeliverable, setUndeliverable, badState, setBadState, tempAwayAtts, setTempAwayAtts, tempAway, setTempAway }) => {


  useEffect(() => {
    console.log("ReMailOptions received undeliverable:", undeliverable); // Debugging
  }, [undeliverable]); // Runs whenever `nonUS` updates


  return (
    <CRow className="d-flex justify-content-between align-items-stretch h-100"> {/* Ensures equal height */}

      {/* Left Column: Evenly Distributed Text Fields and Select Boxes */}
      <CCol xs={6} className="d-flex justify-content-start h-100">
       <CCard className="mb-0 w-100 h-100 d-flex"> {/* Ensures same height */}
          <CCardBody className="d-flex flex-column h-100 justify-content-between"> {/* Evenly distributes elements */}
            
            {/* Days to Hold Temp Aways */}
            <CFormInput 
              type="text" 
              placeholder="Days to Hold Temp Aways"
              value={tempAwayAtts || ''}
              onChange={(e) => setTempAwayAtts(e.target.value)}
              className="mb-4"
            />

            {/* Temp Away Re-Mail Trys */}
            <CFormInput 
              type="text" 
              placeholder="Temp Away Re-Mail Trys"
              value={tempAway || ''}
              onChange={(e) => setTempAway(e.target.value)}
              className="mb-4"
            />


            {/* Customer Type */}
            <CFormSelect
              id="undeliverable"
              aria-label="Unable to Deliver"
              value={undeliverable || ''}
              onChange={(e) => {
                const newValue = e.target.value;
                console.log("🔥 Updating undeliverable to:", newValue);
                setUndeliverable(newValue);
              }}
              className="mb-4"
            >
              <option value=""></option>
              <option value="Return">Return</option>
              <option value="Destroy">Destroy</option>
              <option value="In Process">In Process</option>
            </CFormSelect>

            {/* Customer Type */}
            <CFormSelect
              id="non-us"
              aria-label="Non US"
              value={nonUS || ''}
              onChange={(e) => {
                const newValue = e.target.value;
                console.log("🔥 Updating nonUS to:", newValue);
                setNonUS(newValue);

              }}
              className="mb-4"
            >
              <option value="">Choose Option</option>
              <option value="Return">Return</option>
              <option value="Destroy">Destroy</option>
              <option value="In Process">In Process</option>
            </CFormSelect>

           {/* Customer Type */}
           <CFormSelect
              id="po-box"
              aria-label="New Address is P.O. Box"
              value={poBox || ''}
              onChange={(e) => {
                const newValue = e.target.value;
                console.log("🔥 Updating poBox to:", newValue);
                setPoBox(newValue);
              }}
              className="mb-4">
              <option value=""></option>
              <option value="Return">Return</option>
              <option value="Destroy">Destroy</option>
              <option value="In Process">In Process</option>
            </CFormSelect>

           {/* Customer Type */}
           <CFormSelect
              id="bad-state"
              aria-label="Invalid State"
              value={badState || ''}
              onChange={(e) => {
                const newValue = e.target.value;
                console.log("🔥 Updating badState to:", newValue);
                setBadState(newValue);
              }}
              className="mb-4"
            >
              <option value=""></option>
              <option value="Return">Return</option>
              <option value="Destroy">Destroy</option>
              <option value="In Process">In Process</option>
            </CFormSelect>

          </CCardBody>
        </CCard>
      </CCol>
      
      {/* Right Column: Multiple Select (Decreased Height to Fit 8 Records) */}
      <CCol xs={6} className="d-flex justify-content-end">
      <CCard className="mb-0 w-100 h-100">
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

export default ReMailOptions

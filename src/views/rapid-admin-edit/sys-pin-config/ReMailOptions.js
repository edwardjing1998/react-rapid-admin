import React, { useEffect } from 'react'

import { 
  CCard, 
  CCardBody, 
  CCol, 
  CFormSelect, 
  CRow, 
  CFormInput, 
  CButton 
} from '@coreui/react'
import '../../../scss/sys-prin-configuration/client-atm-pin-prefixes.scss'; // Import custom styles


const ReMailOptions = ({ nonUS, setNonUS, poBox, setPoBox, undeliverable, setUndeliverable, badState, setBadState, tempAwayAtts, setTempAwayAtts, tempAway, setTempAway }) => {

  useEffect(() => {
    console.log("ReMailOptions received undeliverable:", undeliverable);
  }, [undeliverable]);

  return (
    <CRow className="d-flex justify-content-between align-items-stretch h-100">

      {/* Left Column */}
      <CCol xs={6} className="d-flex justify-content-start h-100">
        <CCard className="mb-0 w-100 h-100 d-flex">
          <CCardBody className="d-flex flex-column h-100 justify-content-between">

            {/* Days to Hold Temp Aways */}
            <div className="d-flex align-items-center mb-4">
              <label htmlFor="days-hold-temp" className="form-label mb-0 me-3" style={{
                width: '260px',
                height: '38px',
                padding: '6px 10px',
                borderRadius: '8px',
                fontWeight: '500',
                color: '#4B0082',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Segoe UI, sans-serif',
                textAlign: 'left',
                fontSize: '0.95rem',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center'
              }}>
                Days to Hold Temp Aways:
              </label>
              <CFormInput 
                type="text" 
                id="days-hold-temp"
                value={tempAwayAtts || ''}
                onChange={(e) => setTempAwayAtts(e.target.value)}
                style={{
                  width: '300px',
                  height: '38px',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  color: '#4B0082',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Segoe UI, sans-serif',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  lineHeight: '1',
                  display: 'flex',
                  alignItems: 'center'
                }}
              />
            </div>

            {/* Temp Away Re-Mail Trys */}
            <div className="d-flex align-items-center mb-4">
              <label htmlFor="temp-away-retry" className="form-label mb-0 me-3" style={{
                width: '260px',
                height: '38px',
                padding: '6px 10px',
                borderRadius: '8px',
                fontWeight: '500',
                color: '#4B0082',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Segoe UI, sans-serif',
                textAlign: 'left',
                fontSize: '0.95rem',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center'
              }}>
                Temp Away Re-Mail Trys:
              </label>
              <CFormInput 
                type="text"
                id="temp-away-retry"
                value={tempAway || ''}
                onChange={(e) => setTempAway(e.target.value)}
                style={{
                  width: '300px',
                  height: '38px',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  color: '#4B0082',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Segoe UI, sans-serif',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  lineHeight: '1',
                  display: 'flex',
                  alignItems: 'center'
                }}
              />
            </div>

            {/* Undeliverable */}
            <div className="d-flex align-items-center mb-4">
              <label htmlFor="undeliverable" className="form-label mb-0 me-3" style={{
                width: '200px',
                height: '38px',
                padding: '6px 10px',
                borderRadius: '8px',
                fontWeight: '500',
                color: '#4B0082',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Segoe UI, sans-serif',
                textAlign: 'left',
                fontSize: '0.95rem',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center'
              }}>
                Undeliverable:
              </label>
              <CFormSelect
                id="undeliverable"
                aria-label="Unable to Deliver"
                value={undeliverable || ''}
                onChange={(e) => {
                  const newValue = e.target.value;
                  console.log("🔥 Updating undeliverable to:", newValue);
                  setUndeliverable(newValue);
                }}
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'Segoe UI, sans-serif',
                  fontWeight: '500',
                }}
              >
                <option value=""></option>
                <option value="Return">Return</option>
                <option value="Destroy">Destroy</option>
                <option value="Research Destroy">Research / Destroy</option>
                <option value="Research / Return">Research / Return</option>
                <option value="Research / Carrier Ret">Research / Carrier Ret</option>
              </CFormSelect>
            </div>

            {/* Non US */}
            <div className="d-flex align-items-center mb-4">
              <label htmlFor="non-us" className="form-label mb-0 me-3" style={{
                width: '200px',
                height: '38px',
                padding: '6px 10px',
                borderRadius: '8px',
                fontWeight: '500',
                color: '#4B0082',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Segoe UI, sans-serif',
                textAlign: 'left',
                fontSize: '0.95rem',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center'
              }}>
                Non-US:
              </label>
              <CFormSelect
                id="non-us"
                aria-label="Non US"
                value={nonUS || ''}
                onChange={(e) => {
                  const newValue = e.target.value;
                  console.log("🔥 Updating nonUS to:", newValue);
                  setNonUS(newValue);
                }}
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'Segoe UI, sans-serif',
                  fontWeight: '500',
                }}
              >
                <option value=""></option>
                <option value="Return">Return</option>
                <option value="Destroy">Destroy</option>
                <option value="In Process">In Process</option>
              </CFormSelect>
            </div>

            {/* PO Box */}
            <div className="d-flex align-items-center mb-4">
              <label htmlFor="po-box" className="form-label mb-0 me-3" style={{
                width: '200px',
                height: '38px',
                padding: '6px 10px',
                borderRadius: '8px',
                fontWeight: '500',
                color: '#4B0082',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Segoe UI, sans-serif',
                textAlign: 'left',
                fontSize: '0.95rem',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center'
              }}>
                P.O. Box:
              </label>
              <CFormSelect
                id="po-box"
                aria-label="New Address is P.O. Box"
                value={poBox || ''}
                onChange={(e) => {
                  const newValue = e.target.value;
                  console.log("🔥 Updating poBox to:", newValue);
                  setPoBox(newValue);
                }}
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'Segoe UI, sans-serif',
                  fontWeight: '500',
                }}
              >
                <option value=""></option>
                <option value="Return">Return</option>
                <option value="Destroy">Destroy</option>
                <option value="In Process">In Process</option>
              </CFormSelect>
            </div>

            {/* Bad State */}
            <div className="d-flex align-items-center mb-4">
              <label htmlFor="bad-state" className="form-label mb-0 me-3" style={{
                width: '200px',
                height: '38px',
                padding: '6px 10px',
                borderRadius: '8px',
                fontWeight: '500',
                color: '#4B0082',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Segoe UI, sans-serif',
                textAlign: 'left',
                fontSize: '0.95rem',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center'
              }}>
                Invalid State:
              </label>
              <CFormSelect
                id="bad-state"
                aria-label="Invalid State"
                value={badState || ''}
                onChange={(e) => {
                  const newValue = e.target.value;
                  console.log("🔥 Updating badState to:", newValue);
                  setBadState(newValue);
                }}
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'Segoe UI, sans-serif',
                  fontWeight: '500',
                }}
              >
                <option value=""></option>
                <option value="Return">Return</option>
                <option value="Destroy">Destroy</option>
                <option value="In Process">In Process</option>
              </CFormSelect>
            </div>

          </CCardBody>
        </CCard>
      </CCol>

      {/* Right Column */}
      <CCol xs={6} className="d-flex justify-content-end">
        <CCard className="mb-0 w-100 h-100">
          <CCardBody className="d-flex flex-column h-100">
            <h4 className="text-body-secondary small">
              <code>Do Not Feliver to ...</code>
            </h4>
            <CFormSelect 
                  size="lg" 
                  multiple 
                  aria-label="Do Not Deliver States" 
                  style={{
                    height: '100%',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '0.95rem',
                    resize: 'none',
                    overflowY: 'auto' // enables scrolling
                  }}>
 
                <option></option>
                <option value="1">AL Alabama</option>
                <option value="2">AK Alaska</option>
                <option value="3">AR Arkansas</option>
                <option value="4">AE Armed Forces</option>
                <option value="5">AA Armed Forces</option>
                <option value="6">AP Armed Forces</option>
                <option value="7">CA California</option>
                <option value="8">CO Colorado</option>
                <option value="9">CT Connecticut</option>
                <option value="10">DE Delaware</option>
                <option value="11">NJ New Jersey</option>
                <option value="12">NY New York</option>
                <option value="13">TX Texas</option>
                <option value="14">MI Michigan</option>
                <option value="15">OH Ohio</option>
                <option value="16">LA Louisiana</option>
                <option value="17">ME Maine</option>
                <option value="18">MA Massachusetts</option>
                <option value="19">MN Minnesota</option>
                <option value="20">MS Mississippi</option>
                <option value="21">MO Missouri</option>
              </CFormSelect>
            <div className="flex-grow-1"></div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Buttons */}
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

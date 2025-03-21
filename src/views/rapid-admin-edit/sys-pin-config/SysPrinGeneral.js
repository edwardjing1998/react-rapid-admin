import React from 'react';
import { 
  CCard, 
  CCardBody, 
  CCol, 
  CFormSelect, 
  CRow, 
  CFormInput, 
  CFormCheck,
  CCardHeader
} from '@coreui/react';
import '../../../scss/sys-prin-configuration/client-atm-pin-prefixes.scss'; // Import custom styles

const SysPrinGeneral = ({ custType, setCustType, returnStatus, setReturnStatus, destroyStatus, setDestroyStatus }) => {

  return (
    <CRow className="d-flex align-items-stretch"> 

      {/* First Column - Dropdowns */}
      <CCol xs={6} className="d-flex">
        <CCard className="mb-4 w-100 h-100">

        <CCardBody className="d-flex flex-column h-100">

            <label htmlFor="customer-type" className="form-label">
                Customer Type
            </label>

              {/* Customer Type */}
              <CFormSelect
                id="customer-type"
                aria-label="Customer Type"
                value={custType}
                onChange={(e) => setCustType(e.target.value)}
                className="mb-4"
              >
                <option value=""></option>
                <option value="TypeA">Customer Type A</option>
                <option value="TypeB">Customer Type B</option>
                <option value="TypeC">Customer Type C</option>
              </CFormSelect>


            <label htmlFor="customer-type" className="form-label">
                Return Status
            </label>

              {/* Return Status */}
              <CFormSelect
                id="return-status"
                aria-label="Return Status"
                value={returnStatus}
                onChange={(e) => setReturnStatus(e.target.value)}
                className="mb-4"
              >
                <option value=""></option>
                <option value="Return Status 1">Pending</option>
                <option value="Return Status 2">Approved</option>
                <option value="Return Status 3">Rejected</option>
              </CFormSelect>

              <label htmlFor="customer-type" className="form-label">
                  Destroy Status
              </label>

              {/* Destroy Status */}
              <CFormSelect
                id="destroy-status"
                aria-label="Destroy Status"
                value={destroyStatus}
                onChange={(e) => setDestroyStatus(e.target.value)}
                className="mb-4"
              >
                <option value=""></option>
                <option value="Destroy Status 1">Not Destroyed</option>
                <option value="Destroy Status 2">Destroyed</option>
                <option value="Destroy Status 3">In Process</option>
              </CFormSelect>

              <label htmlFor="customer-type" className="form-label">
                 Special Option
              </label>

              {/* Special */}
              <CFormSelect id="special" aria-label="Special" className="mb-4">
                <option></option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </CFormSelect>

              <label htmlFor="customer-type" className="form-label">
                 Pin Mailer
              </label>

              {/* Pin Mailer */}
              <CFormSelect id="pin-mailer" aria-label="Pin Mailer" className="mb-4">
                <option></option>
                <option value="1">Printed</option>
                <option value="2">Not Printed</option>
              </CFormSelect>

              </CCardBody>


        </CCard>
      </CCol>


     {/* Second Column - Checkboxes and Inputs */}
      <CCol xs={6} className="d-flex flex-column h-100"> 
        
        {/* First Row: Checkboxes */}
        <CCard className="mb-4 w-100 flex-grow-1">
          <CCardBody className="d-flex flex-column gap-3">
            <CFormCheck type="checkbox" id="sys-prin-active" label="Sys/PRIN Active" />
            <CFormCheck type="checkbox" id="rps-customer" label="RPS Customer" />
            <CFormCheck type="checkbox" id="flag-undeliverable" label="Flag Undeliverable a Invalid Address" />
            <CFormCheck type="checkbox" id="status-research" label="A Status accounts going in Research" />
            <CFormCheck type="checkbox" id="perform-non-mon" label="Perform Non Mon 13 on Destroy" />
          </CCardBody>
        </CCard>

        {/* Second Row: Inputs */}
        <CCard className="mb-4 w-100 flex-grow-1">
          <CCardHeader>
            <strong>Options</strong> <small>Additional Settings</small>
          </CCardHeader>
          <CCardBody className="d-flex flex-column h-100 gap-3">
            
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
  );
};

export default SysPrinGeneral;

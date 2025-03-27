import React from 'react'
import {
  CRow,
  CCol,
  CForm,
  CFormInput,
  CFormCheck,
  CFormSelect,
  CButton
} from '@coreui/react'

import '../../../scss/sys-prin-configuration/client-information.scss'

const labelStyle = {
  width: '160px',
  height: '32px',
  padding: '4px 10px',
  borderRadius: '6px',
  fontWeight: '500',
  color: '#4B0082',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Segoe UI, sans-serif',
  textAlign: 'left',
  fontSize: '0.9rem',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  marginRight: '12px',
  marginBottom: 0,
}

const ClientInformationContent = ({ selectedData }) => {
  return (
    <CForm>
      <CRow style={{ fontSize: '14px' }}>
        {/* Row 1: Client ID, Name, New Button */}
        <CCol xs={12} md={5}>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="client-id" className="form-label" style={labelStyle}>Client ID:</label>
            <CFormInput id="client-id" type="text" value={selectedData.client} readOnly size="sm" />
          </div>
        </CCol>
        <CCol xs={12} md={5}>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="name" className="form-label" style={labelStyle}>Name:</label>
            <CFormInput id="name" type="text" value={selectedData.name} readOnly size="sm" />
          </div>
        </CCol>
        <CCol xs={12} md={2} className="d-flex align-items-start mb-2">
          <CButton color="secondary" size="sm">New</CButton>
        </CCol>

        {/* Row 2: Address */}
        <CCol xs={12}>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="address" className="form-label" style={labelStyle}>Address:</label>
            <CFormInput id="address" type="text" value={selectedData.address} readOnly size="sm" />
          </div>
        </CCol>

        {/* Row 3: City, State, Zip Code */}
        <CCol xs={12} md={4}>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="city" className="form-label" style={labelStyle}>City:</label>
            <CFormInput id="city" type="text" value={selectedData.city} readOnly size="sm" />
          </div>
        </CCol>
        <CCol xs={12} md={4}>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="state" className="form-label" style={labelStyle}>State:</label>
            <CFormInput id="state" type="text" value={selectedData.state} readOnly size="sm" />
          </div>
        </CCol>
        <CCol xs={12} md={4}>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="zip" className="form-label" style={labelStyle}>Zip Code:</label>
            <CFormInput id="zip" type="text" value={selectedData.zip} readOnly size="sm" />
          </div>
        </CCol>

        {/* Row 4: Contact */}
        <CCol xs={12}>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="contact" className="form-label" style={labelStyle}>Contact:</label>
            <CFormInput id="contact" type="text" value={selectedData.contact} readOnly size="sm" />
          </div>
        </CCol>

        {/* Row 5: 3 Columns */}
        {/* Column 1 */}
        <CCol xs={12} md={4}>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="fax" className="form-label" style={labelStyle}>Fax Number:</label>
            <CFormInput id="fax" type="text" value={selectedData.fax || ''} readOnly size="sm" />
          </div>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="phone" className="form-label" style={labelStyle}>Phone:</label>
            <CFormInput id="phone" type="text" value={selectedData.phone} readOnly size="sm" />
          </div>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="billing-sys" className="form-label" style={labelStyle}>Billing Sys/Prin:</label>
            <CFormInput id="billing-sys" type="text" value={selectedData.billingSysPin} readOnly size="sm" />
          </div>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="report-breaks" className="form-label" style={labelStyle}>Reports Breaks:</label>
            <CFormSelect id="report-breaks" size="sm">
              <option value="">None</option>
              <option value="by-client">System</option>
              <option value="by-date">Sys/Prin</option>
            </CFormSelect>
          </div>
          <div className="d-flex align-items-start mb-2">
            <label htmlFor="search-type" className="form-label" style={labelStyle}>Search Type:</label>
            <CFormSelect id="search-type" size="sm">
              <option value=""></option>
              <option value="id">Standard</option>
              <option value="name">Amex-AS400</option>
              <option value="state">AS400</option>
            </CFormSelect>
          </div>
        </CCol>

        {/* Column 2 */}
        <CCol xs={12} md={4}>
          <div className="d-flex align-items-start mb-2">
            <CFormCheck type="checkbox" id="client-active" checked={!!selectedData.active} label="Client Active" readOnly className="pt-0" />
          </div>
          <div className="d-flex align-items-start mb-2">
            <CFormCheck type="checkbox" id="sysprin-active" checked={!!selectedData.sysPrinActive} label="SYS/PRIN Active" readOnly className="pt-0" />
          </div>
          <div className="d-flex align-items-start mb-2">
            <CFormCheck type="checkbox" id="positive-reporting" checked={!!selectedData.positiveReporting} label="Positive Reporting" readOnly className="pt-0" />
          </div>
          <div className="d-flex align-items-start mb-2">
            <CFormCheck type="checkbox" id="sub-client" checked={!!selectedData.subClient} label="Sub Client" readOnly className="pt-0" />
          </div>
          <div className="d-flex align-items-start mb-2">
            <CFormCheck type="checkbox" id="amex-issued" checked={!!selectedData.amexIssued} label="Check here: if American Express Issued" readOnly className="pt-0" />
          </div>
        </CCol>

        {/* Column 3 */}
        <CCol xs={12} md={4}>
          <div className="mb-2" style={{ height: '32px' }}></div>
          <div className="mb-2" style={{ height: '32px' }}></div>
          <div className="mb-2" style={{ height: '32px' }}></div>
          <div className="mb-2" style={{ height: '32px' }}></div>
          <div className="d-flex gap-2">
            <CButton color="secondary" size="sm">Ok</CButton>
            <CButton color="secondary" size="sm">Cancel</CButton>
          </div>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default ClientInformationContent

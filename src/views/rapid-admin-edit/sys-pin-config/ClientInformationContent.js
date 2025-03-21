import React from 'react';
import {
  CRow,
  CCol,
  CForm,
  CFormInput,
  CFormCheck
} from '@coreui/react';

import '../../../scss/sys-prin-configuration/client-information.scss'; // Import external CSS file

const ClientInformationContent = ({ selectedData }) => {
  return (
    <CForm>
      <CRow  style={{ fontSize: '14px' }}>

        {/* Client ID */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput
              type="text"
              id="client-id"
              value={selectedData.client}
              placeholder="Client ID"
              readOnly
            />
          </div>
        </CCol>

        {/* Name */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput
              type="text"
              id="name"
              value={selectedData.name}
              placeholder="Name"
              readOnly
            />
          </div>
        </CCol>

        {/* Address */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput
              type="text"
              id="address"
              value={selectedData.address}
              placeholder="Address"
              readOnly
            />
          </div>
        </CCol>

        {/* City */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput 
               type="text" 
               id="city"
               value={selectedData.city} 
               placeholder="City" 
               readOnly
            />
          </div>
        </CCol>

        {/* State */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput 
               type="text"
               id="state"
               value={selectedData.state} 
               placeholder="State" 
               readOnly
            />
          </div>
        </CCol>

        {/* Billing Sys/Pin - Moved to Fifth Row of Second Column */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput
              type="text"
              id="billing-sys"
              value={selectedData.billingSysPin}
              placeholder="Billing Sys/Pin"
              readOnly
            />
          </div>
        </CCol>

        {/* Zip */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput
               type="text"
               id="zip"
               value={selectedData.zip} 
               placeholder="Zip Code" 
               readOnly
            />            
          </div>
        </CCol>

        {/* Contact */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput
               type="text"
               id="contact"
               value={selectedData.contact} 
               placeholder="Contact" 
               readOnly
            />
          </div>
        </CCol>

        {/* Phone */}
        <CCol xs={12} md={6}>
          <div className="mb-3">
            <CFormInput
               type="text"
               id="phone"
               value={selectedData.phone} 
               placeholder="Phone" 
               readOnly
            />
          </div>
        </CCol>

        {/* Client Active Checkbox - Switched with Billing Sys/Pin */}
        <CCol xs={12} md={6} className="d-flex align-items-center client-active-row">
          <div className="mb-3">
            <CFormCheck
              type="checkbox"
              id="client-active"
              checked={!!selectedData.active}
              label="Client Active"
              readOnly
            />
          </div>
        </CCol>

      </CRow>
    </CForm>
  );
};

export default ClientInformationContent;

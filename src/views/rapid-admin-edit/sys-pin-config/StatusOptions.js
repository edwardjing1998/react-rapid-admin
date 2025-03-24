import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormSelect,
  CCol,
  CRow,
} from '@coreui/react'

const labelStyle = {
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
  alignItems: 'center',
}

const selectStyle = {
  fontSize: '0.95rem',
  fontFamily: 'Segoe UI, sans-serif',
  fontWeight: '500',
}

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              {/* First Column: A–F */}
              <CCol sm={6}>
                <CCard>
                  <CCardBody className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="a-status" className="form-label mb-0 me-3" style={labelStyle}>
                        A Status:
                      </label>
                      <CFormSelect id="a-status" aria-label="A Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="b-status" className="form-label mb-0 me-3" style={labelStyle}>
                        B Status:
                      </label>
                      <CFormSelect id="b-status" aria-label="B Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="c-status" className="form-label mb-0 me-3" style={labelStyle}>
                        C Status:
                      </label>
                      <CFormSelect id="c-status" aria-label="C Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="d-status" className="form-label mb-0 me-3" style={labelStyle}>
                        D Status:
                      </label>
                      <CFormSelect id="d-status" aria-label="D Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="e-status" className="form-label mb-0 me-3" style={labelStyle}>
                        E Status:
                      </label>
                      <CFormSelect id="e-status" aria-label="E Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="f-status" className="form-label mb-0 me-3" style={labelStyle}>
                        F Status:
                      </label>
                      <CFormSelect id="f-status" aria-label="F Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>

              {/* Second Column: L–Z */}
              <CCol sm={6}>
                <CCard>
                  <CCardBody className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="l-status" className="form-label mb-0 me-3" style={labelStyle}>
                        L Status:
                      </label>
                      <CFormSelect id="l-status" aria-label="L Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="m-status" className="form-label mb-0 me-3" style={labelStyle}>
                        M Status:
                      </label>
                      <CFormSelect id="m-status" aria-label="M Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="n-status" className="form-label mb-0 me-3" style={labelStyle}>
                        N Status:
                      </label>
                      <CFormSelect id="n-status" aria-label="N Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="o-status" className="form-label mb-0 me-3" style={labelStyle}>
                        O Status:
                      </label>
                      <CFormSelect id="o-status" aria-label="O Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="p-status" className="form-label mb-0 me-3" style={labelStyle}>
                        P Status:
                      </label>
                      <CFormSelect id="p-status" aria-label="P Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <label htmlFor="z-status" className="form-label mb-0 me-3" style={labelStyle}>
                        Z Status:
                      </label>
                      <CFormSelect id="z-status" aria-label="Z Status" style={selectStyle}>
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards

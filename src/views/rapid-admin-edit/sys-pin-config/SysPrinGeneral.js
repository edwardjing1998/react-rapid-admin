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

      const SysPrinGeneral = ({
        custType,
        setCustType,
        returnStatus,
        setReturnStatus,
        destroyStatus,
        setDestroyStatus,
        nm13,
        setNm13,
        active,
        setActive,
        addrFlag,
        setAddrFlag,
        rsp,
        setRsp,
        astatRch,
        setAstatRch
      }) => {

    return (
      <CRow className="d-flex align-items-stretch"> 

        {/* First Column - Dropdowns */}
        <CCol xs={6} className="d-flex">
          <CCard className="mb-4 w-100 h-100" >

          <CCardBody className="d-flex flex-column h-100">

          <div className="d-flex align-items-start mb-4">
              <label htmlFor="customer-type" className="form-label me-3 mb-0"   style={{
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
                }}>
                Customer Type:
              </label>

                {/* Customer Type */}
                <CFormSelect
                  id="customer-type"
                  aria-label="Customer Type"
                  value={custType}
                  onChange={(e) => setCustType(e.target.value)}
                  className="mb-4"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: 'Segoe UI, sans-serif',
                    fontWeight: '500',
                  }}
                >
                  <option value=""></option>
                  <option value="TypeA">Full Processing</option>
                  <option value="TypeB">Destroy All</option>
                  <option value="TypeC">Retrun All</option>
                </CFormSelect>
           </div>

           <div className="d-flex align-items-start mb-4">
              <label htmlFor="return-status" className="form-label me-3 mb-0" style={{
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
                }}>
                  Return Status:
              </label>

                {/* Return Status */}
                <CFormSelect
                  id="return-status"
                  aria-label="Return Status"
                  value={returnStatus}
                  onChange={(e) => setReturnStatus(e.target.value)}
                  className="mb-4"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: 'Segoe UI, sans-serif',
                    fontWeight: '500',
                  }}
                >
                  <option value="">None</option>
                  <option value="Return Status 1">A Status</option>
                  <option value="Return Status 2">C Status</option>
                  <option value="Return Status 3">E Status</option>
                  <option value="Return Status 4">F Status</option>
                </CFormSelect>
            </div>

            <div className="d-flex align-items-start mb-4">
              <label htmlFor="destroy-status" className="form-label me-3 mb-0" style={{
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
                }}>
                    Destroy Status:
                </label>

                {/* Destroy Status */}
                <CFormSelect
                  id="destroy-status"
                  aria-label="Destroy Status"
                  value={destroyStatus}
                  onChange={(e) => setDestroyStatus(e.target.value)}
                  className="mb-4"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: 'Segoe UI, sans-serif',
                    fontWeight: '500',
                  }}
                >
                  <option value="">None</option>
                  <option value="Destroy Status 1">A Status</option>
                  <option value="Destroy Status 2">C Status</option>
                  <option value="Destroy Status 3">E Status</option>
                  <option value="Destroy Status 4">F Status</option>
                </CFormSelect>
            </div>

            <div className="d-flex align-items-start mb-4">
              <label htmlFor="special-option" className="form-label me-3 mb-0" style={{
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
                }}>
                  Special:
                </label>

                {/* Special */}
                <CFormSelect id="special-option" aria-label="Special" className="mb-4"
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: 'Segoe UI, sans-serif',
                    fontWeight: '500',
                  }}>
                  <option></option>
                  <option value="1">Destroy</option>
                  <option value="2">Return</option>
                </CFormSelect>
              </div>

              <div className="d-flex align-items-start mb-4">
              <label htmlFor="special-option" className="form-label me-3 mb-0" style={{
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
                }}>
                  Pin Mailer:
                </label>

                {/* Pin Mailer */}
                <CFormSelect id="pin-mailer" aria-label="Pin Mailer" className="mb-4" style={{
                    fontSize: '0.95rem',
                    fontFamily: 'Segoe UI, sans-serif',
                    fontWeight: '500',
                  }}>
                  <option></option>
                  <option value="1">Destroy</option>
                  <option value="2">Return</option>
                </CFormSelect>
                </div>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Second Column - Checkboxes and Inputs */}
        <CCol xs={6} className="d-flex">
          <CCard className="mb-4 w-100 h-100">
            <CCardBody className="d-flex flex-column h-100 justify-content-between">
              <div className="d-flex flex-column gap-2 mb-4">

              <CFormCheck
                type="checkbox"
                id="sys-prin-active"
                className="d-flex align-items-center"
                label={
                  <span style={{
                    marginLeft: '30px',
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
                    Sys/PRIN Active
                  </span>
                }
                checked={active === 'Y'}
                onChange={(e) => setActive(e.target.checked ? 'Y' : 'N')}
              />

              <CFormCheck
                type="checkbox"
                id="rps-customer"
                className="d-flex align-items-center"
                label={
                  <span style={{
                    marginLeft: '30px',
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
                    RPS Customer
                  </span>
                }
                checked={rsp === 'Y'}
                onChange={(e) => setRsp(e.target.checked ? 'Y' : 'N')}
              />

              <CFormCheck
                type="checkbox"
                id="flag-undeliverable"
                className="d-flex align-items-center"
                label={
                  <span style={{
                    marginLeft: '30px',
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
                  }}>
                    Flag Undeliverable an Invalid Address
                  </span>
                }
                checked={addrFlag === 'Invalid'}
                onChange={(e) => setAddrFlag(e.target.checked ? 'Invalid' : 'Valid')}
              />

              <CFormCheck
                type="checkbox"
                id="status-research"
                className="d-flex align-items-center"
                label={
                  <span style={{
                    marginLeft: '30px',
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
                  }}>
                    A Status accounts going in Research
                  </span>
                }
                checked={astatRch === 'Y'}
                onChange={(e) => setAstatRch(e.target.checked ? 'Y' : 'N')}
              />

              <CFormCheck
                type="checkbox"
                id="perform-non-mon"
                className="d-flex align-items-center"
                label={
                  <span style={{
                    marginLeft: '30px',
                    width: '250px',
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
                    Perform Non Mon 13 on Destroy
                  </span>
                }
                checked={nm13 === 'Y'}
                onChange={(e) => setNm13(e.target.checked ? 'Y' : 'N')}
              />               
              </div>

                   <>
                  {/* 🔼 Your form section moved to the top */}
                  <div className="d-flex flex-column gap-2 mb-4">
                    <label
                      style={{
                        backgroundColor: '#E6E6FA',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '1rem',
                        color: '#4B0082',
                        fontFamily: 'Segoe UI, sans-serif',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                        display: 'inline-block',
                        marginBottom: '10px'
                      }}
                    >
                      Chronicle Memo Options
                    </label>

                    {/* Active checkbox */}
                    <CFormCheck
                      type="checkbox"
                      id="active"
                      className="d-flex align-items-center"
                      label={
                        <span style={{
                          marginLeft: '30px',
                          width: '250px',
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
                          Active
                        </span>
                      }
                    />

                    {/* Memo Type input */}
                    <div className="d-flex align-items-center mb-3">
                      <label htmlFor="memo-type" className="form-label mb-0 me-3" style={{
                        width: '130px',
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
                        Memo Type:
                      </label>
                      <CFormInput
                        type="text"
                        id="memo-type"
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

                    {/* Filter ID input */}
                    <div className="d-flex align-items-center mb-3">
                      <label htmlFor="filter-id" className="form-label mb-0 me-3" style={{
                        width: '130px',
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
                        Filter ID:
                      </label>
                      <CFormInput
                        type="text"
                        id="filter-id"
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
                  </div>

                  {/* ⬇️ Your layout remains unchanged */}
                  <CRow className="d-flex align-items-stretch">
                    {/* First and second column here */}
                  </CRow>
                </>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    );
  };

export default SysPrinGeneral;

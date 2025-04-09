import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CFormLabel,
  CCol,
  CFormSelect,
  CRow,
  CFormInput,
  CButton,
} from '@coreui/react'
import '../../../scss/sys-prin-configuration/client-atm-pin-prefixes.scss'

const ClientATMCashPrefixes = () => {
  const [options, setOptions] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [selectedToDelete, setSelectedToDelete] = useState([])

  const handleAddOption = () => {
    const trimmed = (inputValue || '').trim()
    if (trimmed !== '' && !options.includes(trimmed)) {
      setOptions((prev) => [...prev, trimmed])
      setInputValue('')
    }
  }

  const handleDeleteOption = () => {
    if (selectedToDelete.length > 0) {
      setOptions((prev) => prev.filter((opt) => !selectedToDelete.includes(opt)))
      setSelectedToDelete([])
    }
  }

  const handleSelectionChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value)
    setSelectedToDelete(selected)
  }

  return (
    <CRow
      className="d-flex justify-content-between align-items-stretch"
      style={{ minHeight: '60vh' }}
    >
      {/* Left Column - Select List */}
      <CCol xs={6} className="d-flex justify-content-start h-100">
        <CCard className="mb-4 w-100 h-100">
          <CCardBody className="d-flex flex-column h-100">
            <p className="text-body-secondary small" style={{ fontSize: '0.97rem' }}>
              <span>Billing Sys/Prin: <code>123456789</code></span>
            </p>

            <div className="flex-grow-1 d-flex flex-column" style={{ height: '400px' }}>
              <CFormSelect
                size="lg"
                multiple
                aria-label="Multiple select example"
                style={{ fontSize: '0.97rem', flex: 1 }}
                className="w-100"
                onChange={handleSelectionChange}
                value={selectedToDelete}
              >
                {options.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </CFormSelect>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Right Column - Input + Controls */}
      <CCol xs={6} className="d-flex justify-content-end h-100">
        <CCard className="mb-4 w-100" style={{ minHeight: '470px' }}>
          <CCardBody className="d-flex flex-column justify-content-between h-100">

            {/* Row 1: Spacer */}
            <div></div>

            {/* Row 2: Account Prefix */}
            <div>
              <CFormLabel htmlFor="prefixInput" style={{ fontSize: '0.87rem' }}>
                Account Prefix
              </CFormLabel>
              <CFormInput
                id="prefixInput"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter account prefix"
              />
            </div>

            {/* Row 3: Spacer */}
            <div style={{ height: '10px' }}></div>

            {/* Row 4: ATM/Cash + Buttons in 3 columns */}
            <div>
              <CFormLabel htmlFor="atmSelect" style={{ fontSize: '0.87rem' }}>
                ATM/Cash
              </CFormLabel>
              <CFormSelect id="atmSelect" className="mb-3">
                <option value="1">Destroy</option>
                <option value="2">Return</option>
              </CFormSelect>

              {/* Buttons in 3 columns */}
              <CRow className="text-center">
                <CCol>
                  <CButton color="outline-primary" className="w-100" onClick={handleAddOption}>OK</CButton>
                </CCol>
                <CCol>
                  <CButton color="outline-success" className="w-100" onClick={handleAddOption}>Add</CButton>
                </CCol>
                <CCol>
                  <CButton color="outline-danger" className="w-100" onClick={handleDeleteOption}>Delete</CButton>
                </CCol>
              </CRow>
            </div>

            {/* Row 5: Spacer */}
            <div></div>

            {/* Row 6: Grow to fill remaining space */}
            <div className="flex-grow-1"></div>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ClientATMCashPrefixes

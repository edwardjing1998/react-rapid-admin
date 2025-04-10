import React, { useEffect, useState } from 'react'
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

const ClientATMCashPrefixes = ({ selectedData }) => {
  const [options, setOptions] = useState([]) // list of prefix strings
  const [inputValue, setInputValue] = useState('') // prefix input value
  const [atmCashRule, setAtmCashRule] = useState('') // atmCashRule value
  const [selectedToDelete, setSelectedToDelete] = useState([])

  useEffect(() => {
    if (
      selectedData &&
      typeof selectedData === 'object' &&
      selectedData.sysPrinsPrefixes
    ) {
      let parsed = selectedData.sysPrinsPrefixes

      if (typeof parsed === 'string') {
        try {
          parsed = JSON.parse(parsed)
        } catch (e) {
          console.error('Invalid JSON in sysPrinsPrefixes', e)
          parsed = []
        }
      }

      if (Array.isArray(parsed)) {
        const prefixes = parsed.map((p) => p.prefix)
        setOptions(prefixes)
      }
    }
  }, [selectedData])

  const handleSelectionChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value)
    setSelectedToDelete(selected)

    if (selected.length > 0) {
      const selectedPrefix = selected[0]
      setInputValue(selectedPrefix)

      // Find the atmCashRule based on prefix
      const found = selectedData.sysPrinsPrefixes?.find((p) => p.prefix === selectedPrefix)
      if (found) {
        setAtmCashRule(found.atmCashRule)
      }
    }
  }

  const handleAddOption = () => {
    const trimmed = (inputValue || '').trim()
    if (trimmed !== '' && !options.includes(trimmed)) {
      setOptions((prev) => [...prev, trimmed])
      setInputValue('')
      setAtmCashRule('')
    }
  }

  const handleDeleteOption = () => {
    if (selectedToDelete.length > 0) {
      setOptions((prev) => prev.filter((opt) => !selectedToDelete.includes(opt)))
      setSelectedToDelete([])
      setInputValue('')
      setAtmCashRule('')
    }
  }

  return (
    <CRow className="d-flex justify-content-between align-items-stretch" style={{ minHeight: '60vh' }}>
      {/* Left Column */}
      <CCol xs={6} className="d-flex justify-content-start h-100">
        <CCard className="mb-4 w-100 h-100">
          <CCardBody className="d-flex flex-column h-100">
            <p className="text-body-secondary small" style={{ fontSize: '0.97rem' }}>
              <span>Billing Sys/Prin: <code>{selectedData?.billingSp}</code></span>
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

      {/* Right Column */}
      <CCol xs={6} className="d-flex justify-content-end h-100">
        <CCard className="mb-4 w-100" style={{ minHeight: '470px' }}>
          <CCardBody className="d-flex flex-column justify-content-between h-100">
            <div></div>

            {/* Prefix input */}
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

            <div style={{ height: '10px' }}></div>

            {/* ATM/Cash Rule dropdown */}
            <div>
              <CFormLabel htmlFor="atmSelect" style={{ fontSize: '0.87rem' }}>
                ATM/Cash
              </CFormLabel>
              <CFormSelect
                id="atmSelect"
                className="mb-3"
                value={atmCashRule}
                onChange={(e) => setAtmCashRule(e.target.value)}
              >
                <option value="">Select Rule</option>
                <option value="Destroy">Destroy</option>
                <option value="Return">Return</option>
              </CFormSelect>

              {/* Buttons */}
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

            <div className="flex-grow-1"></div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ClientATMCashPrefixes

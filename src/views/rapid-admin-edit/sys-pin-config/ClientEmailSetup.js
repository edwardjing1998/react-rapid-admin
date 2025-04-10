import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CFormSelect,
  CFormInput,
  CFormCheck,
  CButton,
} from '@coreui/react'

const EmailRecipientsCard = () => {
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [selectedRecipients, setSelectedRecipients] = useState([])
  const [emailServer, setEmailServer] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [isCC, setIsCC] = useState(false)
  const [options, setOptions] = useState([])

  const emailServers = ['Omaha-SMTP Server (uschaappsmtp.1dc.com)', 'Cha-SMTP Server (uschaappsmtp.1dc.com)']

  const handleChange = (selectedOptions) => {
    const values = Array.from(selectedOptions).map((opt) => opt.value)
    setSelectedRecipients(values)
  }

  const handleNew = () => {
    if (!name || !emailAddress) return

    const newEntry = `${name} <${emailAddress}>${isCC ? ' (CC)' : ''}`

    if (!options.includes(newEntry)) {
      setOptions((prev) => [...prev, newEntry])
    }

    setSelectedRecipients((prev) => [...prev, newEntry])
    setName('')
    setEmailAddress('')
    setIsCC(false)
  }

  const handleAdd = () => {
    if (!emailAddress.trim()) return

    const newEntry = emailAddress.trim()
    if (!options.includes(newEntry)) {
      setOptions((prev) => [...prev, newEntry])
    }

    setSelectedRecipients((prev) => [...prev, newEntry])
    setEmailAddress('')
  }

  const handleRemove = () => {
    if (selectedRecipients.length === 0) return

    setOptions((prev) => prev.filter((opt) => !selectedRecipients.includes(opt)))
    setSelectedRecipients([])
  }

  const handleSave = async () => {
    const payload = {
      recipients: selectedRecipients,
      name,
      emailAddress,
      emailServer,
      isActive,
      isCC,
    }

    try {
      const response = await fetch('/api/emailSetup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Saved successfully:', result)
        alert('Saved successfully!')
      } else {
        console.error('Save failed:', response.status)
        alert('Failed to save.')
      }
    } catch (error) {
      console.error('Error during save:', error)
      alert('An error occurred while saving.')
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>Email Recipients</CCardHeader>
          <CCardBody>
            {/* Multi Select */}
            <CRow className="align-items-center mb-3">
              <CCol xs={12} md={3}>
                Email Recipients:
              </CCol>
              <CCol xs={12} md={9}>
                <CFormSelect
                  multiple
                  size="6"
                  value={selectedRecipients}
                  onChange={(e) => handleChange(e.target.selectedOptions)}
                >
                  {options.map((email, idx) => (
                    <option key={idx} value={email}>
                      {email}
                    </option>
                  ))}
                </CFormSelect>
              </CCol>
            </CRow>

            {/* Email Server and Recipient Active */}
            <CRow className="mb-3 align-items-center">
              <CCol xs={12} md={3}>
                Email Server:
              </CCol>
              <CCol xs={12} md={5}>
                <CFormSelect
                  value={emailServer}
                  onChange={(e) => setEmailServer(e.target.value)}
                >
                  <option value="">Select Email Server</option>
                  {emailServers.map((srv, idx) => (
                    <option key={idx} value={srv}>
                      {srv}
                    </option>
                  ))}
                </CFormSelect>
              </CCol>
              <CCol xs={12} md={4}>
                <CFormCheck
                  label="Recipient Active"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
              </CCol>
            </CRow>

            {/* Name Field with CC */}
            <CRow className="mb-3 align-items-center">
              <CCol xs={12} md={3}>
                Name:
              </CCol>
              <CCol xs={12} md={6}>
                <CFormInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </CCol>
              <CCol xs={12} md={3}>
                <CFormCheck
                  label="CC"
                  checked={isCC}
                  onChange={(e) => setIsCC(e.target.checked)}
                />
              </CCol>
            </CRow>

            {/* Email Address Field */}
            <CRow className="mb-3 align-items-center">
              <CCol xs={12} md={3}>
                Email Address:
              </CCol>
              <CCol xs={12} md={9}>
                <CFormInput
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="Enter email address"
                />
              </CCol>
            </CRow>

            {/* Selected Values Display */}
            <CRow className="mb-3">
              <CCol>
                Selected:{' '}
                {selectedRecipients.length > 0
                  ? selectedRecipients.join(', ')
                  : 'None'}
              </CCol>
            </CRow>

            {/* Buttons */}
            <CRow className="mt-4">
              <CCol className="d-flex gap-2 justify-content-end">
                <CButton color="info" onClick={handleNew}>
                  New
                </CButton>
                <CButton color="primary" onClick={handleAdd}>
                  Add
                </CButton>
                <CButton color="danger" onClick={handleRemove}>
                  Remove
                </CButton>
                <CButton color="success" onClick={handleSave}>
                  Save
                </CButton>
                <CButton color="secondary">
                  Clear
                </CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EmailRecipientsCard

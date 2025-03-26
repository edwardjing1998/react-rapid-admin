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
  const [options, setOptions] = useState([
    'user1@example.com',
    'user2@example.com',
    'user3@example.com',
    'user4@example.com',
    'user5@example.com',
    'user6@example.com',
    'user7@example.com',
    'user8@example.com',
    'user9@example.com',
    'user10@example.com',
  ])

  const emailServers = ['Exchange', 'Gmail', 'Outlook', 'Yahoo']

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
                <CButton color="primary">Add</CButton>
                <CButton color="danger">Remove</CButton>
                <CButton color="success">Save</CButton>
                <CButton color="secondary">Clear</CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EmailRecipientsCard

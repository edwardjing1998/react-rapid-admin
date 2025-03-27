import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormCheck,
  CButton,
  CRow,
  CCol,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
} from '@coreui/react'

const EmailSetup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    application: '',
    emailServer: '',
    emailServerEnabled: false,
    days: {
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
    },
    startHour: '',
    endHour: '',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (formData.days.hasOwnProperty(name)) {
      setFormData((prev) => ({
        ...prev,
        days: {
          ...prev.days,
          [name]: checked,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }))
    }
  }

  const handleSelectAllDays = () => {
    setFormData((prev) => ({
      ...prev,
      days: Object.keys(prev.days).reduce((acc, day) => {
        acc[day] = true
        return acc
      }, {}),
    }))
  }

  const sampleData = [
    { id: '0001', status: 'Y', name: 'Alice Smith', email: 'alice@example.com', application: 'Amex Email' },
    { id: '0005', status: 'N', name: 'Bob Johnson', email: 'bob@example.com', application: 'Benchmark Results' },
    { id: '0002', status: 'Y', name: 'Carol Lee', email: 'carol@example.com', application: 'Bulk Card' },
    { id: '0003', status: 'N', name: 'David Green', email: 'david@example.com', application: 'Amex Email' },
    { id: '0004', status: 'Y', name: 'Eva Adams', email: 'eva@example.com', application: 'Benchmark Results' },
  ]

  return (
    <CForm className="p-4">
      {/* Row 1 - Email Setup */}
      <CCard className="mb-4">
        <CCardHeader>Grid Table</CCardHeader>
        <CCardBody>
          <CTable striped hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Index</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableHeaderCell>Application</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {sampleData.map((user, idx) => (
                <CTableRow key={idx}>
                  <CTableDataCell>{user.id}</CTableDataCell>
                  <CTableDataCell>{user.status}</CTableDataCell>
                  <CTableDataCell>{user.name}</CTableDataCell>
                  <CTableDataCell>{user.email}</CTableDataCell>
                  <CTableDataCell>{user.application}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Row 2 - Form Fields with 3 Columns */}
      <CRow className="mb-4">
        {/* Column 1 spans 2 columns */}
        <CCol md={8}>
          <CRow className="mb-3 align-items-center">
            <CCol md={3}>
              <CFormLabel className="mb-0">Name</CFormLabel>
            </CCol>
            <CCol md={9}>
              <CFormInput name="name" value={formData.name} onChange={handleChange} />
            </CCol>
          </CRow>

          <CRow className="mb-3 align-items-center">
            <CCol md={3}>
              <CFormLabel className="mb-0">Email Address</CFormLabel>
            </CCol>
            <CCol md={9}>
              <CFormInput name="email" value={formData.email} onChange={handleChange} />
            </CCol>
          </CRow>

          <CRow className="mb-3 align-items-center">
            <CCol md={3}>
              <CFormLabel className="mb-0">Application</CFormLabel>
            </CCol>
            <CCol md={9}>
              <CFormSelect name="application" value={formData.application} onChange={handleChange}>
                <option value="">-- Select Application --</option>
                <option value="Amex Email">Amex Email</option>
                <option value="Benchmark Results">Benchmark Results</option>
                <option value="Bulk Card">Bulk Card</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <CRow className="mb-3 align-items-center">
            <CCol md={3}>
              <CFormLabel className="mb-0">Email Server</CFormLabel>
            </CCol>
            <CCol md={9}>
              <CFormSelect name="emailServer" value={formData.emailServer} onChange={handleChange}>
                <option value="">-- Select Email Server --</option>
                <option value="Server 1">Server 1</option>
                <option value="Server 2">Server 2</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <CRow className="mb-3 align-items-center">
            <CCol md={3}>
              <CFormLabel className="mb-0">Enable</CFormLabel>
            </CCol>
            <CCol md={9}>
              <CFormCheck
                label="Enable Email Server"
                name="emailServerEnabled"
                checked={formData.emailServerEnabled}
                onChange={handleChange}
              />
            </CCol>
          </CRow>
        </CCol>

        {/* Column 2 spans 1 column - 5 Styled Rows */}
        <CCol md={4}>
          {/* Row 1: Sunday + Thursday */}
          <CRow className="mb-2">
            <CCol>
              <div className="d-flex gap-4">
                <CFormCheck label="Sunday" name="Sunday" checked={formData.days.Sunday} onChange={handleChange} />
                <CFormCheck label="Thursday" name="Thursday" checked={formData.days.Thursday} onChange={handleChange} />
              </div>
            </CCol>
          </CRow>

          {/* Row 2: Monday + Friday */}
          <CRow className="mb-2">
            <CCol>
              <div className="d-flex gap-4">
                <CFormCheck label="Monday" name="Monday" checked={formData.days.Monday} onChange={handleChange} />
                <CFormCheck label="Friday" name="Friday" checked={formData.days.Friday} onChange={handleChange} />
              </div>
            </CCol>
          </CRow>

          {/* Row 3: Tuesday + Saturday */}
          <CRow className="mb-2">
            <CCol>
              <div className="d-flex gap-4">
                <CFormCheck label="Tuesday" name="Tuesday" checked={formData.days.Tuesday} onChange={handleChange} />
                <CFormCheck label="Saturday" name="Saturday" checked={formData.days.Saturday} onChange={handleChange} />
              </div>
            </CCol>
          </CRow>

          {/* Row 4: Wednesday + All Button */}
          <CRow className="mb-2">
            <CCol className="d-flex align-items-center gap-3">
              <CFormCheck label="Wednesday" name="Wednesday" checked={formData.days.Wednesday} onChange={handleChange} />
              <CButton size="sm" color="info" onClick={handleSelectAllDays}>All</CButton>
            </CCol>
          </CRow>

          {/* Row 5: Start Hour + End Hour */}
          <CRow className="mb-2">
            <CCol className="d-flex gap-3">
              <CFormSelect name="startHour" value={formData.startHour} onChange={handleChange}>
                <option value="">Start Hour</option>
                {[...Array(24).keys()].map((h) => (
                  <option key={h} value={h}>{`${h}:00`}</option>
                ))}
              </CFormSelect>
              <CFormSelect name="endHour" value={formData.endHour} onChange={handleChange}>
                <option value="">End Hour</option>
                {[...Array(24).keys()].map((h) => (
                  <option key={h} value={h}>{`${h}:00`}</option>
                ))}
              </CFormSelect>
            </CCol>
          </CRow>
        </CCol>
      </CRow>

      {/* Row 3 - Buttons */}
      <CRow className="mb-3">
        <CCol>
          <div className="d-flex flex-wrap gap-2 justify-content-end">
            <CButton color="primary">OK</CButton>
            <CButton color="secondary">Cancel</CButton>
            <CButton color="success">Add</CButton>
            <CButton color="warning">Update</CButton>
            <CButton color="danger">Delete</CButton>
            <CButton color="light">Clear</CButton>
            <CButton color="info">Test</CButton>
          </div>
        </CCol>
      </CRow>

    </CForm>
  )
}

export default EmailSetup

import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const InputGroup = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/input-group/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Place one add-on or button on either side of an input. You may also place one on both
              sides of an input. Remember to place <code>&lt;CFormLabel&gt;</code>s outside the
              input group.
            </p>
            <DocsExample href="forms/input-group">
              <CFormLabel htmlFor="basic-url">Enter Special Processing Notes for this SYS/PRIN</CFormLabel>
              <CInputGroup>
                <CFormTextarea aria-label="With textarea"></CFormTextarea>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default InputGroup

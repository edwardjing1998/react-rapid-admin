import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormSelect,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Body</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Cards assume no specific <code>width</code> to start, so they&#39;ll be 100% wide
              unless otherwise stated. You can adjust this as required with custom CSS, grid
              classes, grid Sass mixins, or services.
            </p>
            <h3>Using grid markup</h3>
            <p className="text-body-secondary small">
              Using the grid, wrap cards in columns and rows as needed.
            </p>
            <DocsExample href="components/card/#sizing">
              <CRow>
                {/* First Column: A-F Status */}
                <CCol sm={6}>
                  <CCard>
                    <CCardBody className="d-flex flex-column gap-3">
                      <CFormSelect aria-label="A Status">
                        <option>A Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="B Status">
                        <option>B Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="C Status">
                        <option>C Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="D Status">
                        <option>D Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="E Status">
                        <option>E Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="F Status">
                        <option>F Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </CCardBody>
                  </CCard>
                </CCol>

                {/* Second Column: L-Z Status */}
                <CCol sm={6}>
                  <CCard>
                    <CCardBody className="d-flex flex-column gap-3">
                      <CFormSelect aria-label="L Status">
                        <option>L Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="M Status">
                        <option>M Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="N Status">
                        <option>N Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="O Status">
                        <option>O Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="P Status">
                        <option>P Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>

                      <CFormSelect aria-label="Z Status">
                        <option>Z Status</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </CFormSelect>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </DocsExample>            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards

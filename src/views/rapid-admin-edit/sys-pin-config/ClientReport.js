import React, { useEffect, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import '../../../scss/sys-prin-configuration/client-information.scss';

ModuleRegistry.registerModules([AllCommunityModule]);

const ClientReport = ({ onRowClick }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const clientData = [
      { reportName: "SLA Report [Web]", receive: "Yes", destination: "File", fileText: "Text", email: "Email", password: "123456" },
      { reportName: "Rapid Titanium Report", receive: "No", destination: "Print", fileText: "Excel", email: "Web", password: "abcdef" },
      { reportName: "Rapid Daily Activity Report", receive: "Yes", destination: "File", fileText: "Excel", email: "None", password: "pass789" },
      { reportName: "SLA Report", receive: "No", destination: "Print", fileText: "Text", email: "None", password: "secure!" },
      { reportName: "Pin Mailer Totals", receive: "Yes", destination: "File", fileText: "Text", email: "Email", password: "pwd123" },
      { reportName: "Reset Master Codes for Report", receive: "No", destination: "Print", fileText: "Text", email: "Web", password: "hello@1" },
    ];
    setTableData(clientData);
  }, []);

  const cellSelectStyle = {
    width: '100%',
    border: '1px solid gray',
    borderRadius: '4px',
    height: '28px'
  };

  const columnDefs = [
    { headerName: '#', valueGetter: 'node.rowIndex + 1', width: 70 },
    { field: 'reportName', headerName: 'Report Name', filter: true },
    {
      field: 'receive', headerName: 'Receive', filter: true, cellRenderer: (params) => (
        <select
          value={params.value}
          onChange={(e) =>
            params.api.getRowNode(params.node.id).setDataValue('receive', e.target.value)
          }
          onClick={(e) => e.stopPropagation()}
          style={cellSelectStyle}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      )
    },
    {
      field: 'destination', headerName: 'Destination', filter: true, cellRenderer: (params) => (
        <select
          value={params.value}
          onChange={(e) =>
            params.api.getRowNode(params.node.id).setDataValue('destination', e.target.value)
          }
          onClick={(e) => e.stopPropagation()}
          style={cellSelectStyle}
        >
          {['File', 'Print'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )
    },
    {
      field: 'fileText', headerName: 'File Type', filter: true, cellRenderer: (params) => (
        <select
          value={params.value}
          onChange={(e) =>
            params.api.getRowNode(params.node.id).setDataValue('fileText', e.target.value)
          }
          onClick={(e) => e.stopPropagation()}
          style={cellSelectStyle}
        >
          {['Excel', 'Text'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )
    },
    {
      field: 'email', headerName: 'Email', filter: true, cellRenderer: (params) => (
        <select
          value={params.value}
          onChange={(e) =>
            params.api.getRowNode(params.node.id).setDataValue('email', e.target.value)
          }
          onClick={(e) => e.stopPropagation()}
          style={cellSelectStyle}
        >
          <option value="email">Email</option>
          <option value="web">Web</option>
          <option value="web">None</option>
        </select>
      )
    },
    {
      field: 'password', headerName: 'Password', filter: true, cellRenderer: (params) => (
        <input
          type="password"
          value={params.value}
          onChange={(e) =>
            params.api.getRowNode(params.node.id).setDataValue('password', e.target.value)
          }
          onClick={(e) => e.stopPropagation()}
          style={{ width: '100%', fontSize: '12px', height: '30px', padding: '2px 4px', border: '1px solid gray', borderRadius: '4px' }}
        />
      )
    }
  ];

  const defaultColDef = {
    flex: 1,
    resizable: true,
    filter: true,
  };

  const handleRowClicked = (event) => {
    const row = event.data;
    localStorage.setItem("selectedClient", row.reportName);
    onRowClick(row);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: '#f8f9f9', color: 'black' }}>
            Sys Prins Clients
          </CCardHeader>
          <CCardBody>
            <div className="ag-grid-container ag-theme-quartz" style={{ height: 400 }}>
              <AgGridReact
                rowData={tableData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={5}
                onRowClicked={handleRowClicked}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ClientReport;
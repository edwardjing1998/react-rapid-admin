import React, { useEffect, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormSelect
} from '@coreui/react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { clientsJson } from './data.js';
import '../../../scss/sys-prin-configuration/client-information.scss';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const ClientInformation = ({ onRowClick }) => {
  const [selectedClient, setSelectedClient] = useState('');
  const [tableData, setTableData] = useState([]);
  const [clientOptions, setClientOptions] = useState([]);

  useEffect(() => {
    const uniqueClients = [...new Set(clientsJson.map(c => c.client))];
    setClientOptions(uniqueClients);
  }, []);

  useEffect(() => {
    if (!selectedClient) {
      setTableData([]);
      return;
    }

    const flattenedData = [];
    const clientGroup = clientsJson.find(c => c.client === selectedClient);

    if (!clientGroup || !clientGroup.sysPrins) return;

    // Group header - client
    flattenedData.push({
      isGroup: true,
      groupLevel: 1,
      groupLabel: `▼ ${selectedClient}`,
      client: selectedClient,
    });

    clientGroup.sysPrins.forEach(sysPrin => {
      const sysPrinId = sysPrin.sysPrin;

      // Group header - sysPrin
      flattenedData.push({
        isGroup: true,
        groupLevel: 2,
        groupLabel: `  › ${sysPrinId}`,
        client: selectedClient,
        sysPrin: sysPrinId,
      });

      // Data row
      flattenedData.push({
        isGroup: false,
        client: selectedClient,
        sysPrin: sysPrinId,
        name: `SysPrin ${sysPrin.sysPrin}`,
        address: 'N/A',
        city: 'N/A',
        state: 'N/A',
        zip: 'N/A',
        contact: sysPrin.contact,
        phone: sysPrin.phone,
        active: sysPrin.active === 'Y',
      });
    });

    setTableData(flattenedData);
  }, [selectedClient]);

  const columnDefs = [
    {
      field: 'groupLabel',
      colSpan: (params) => (params.data?.isGroup ? 6 : 1),
      cellRenderer: (params) => params.data?.isGroup ? <strong>{params.value}</strong> : '',
      valueGetter: (params) => params.data?.isGroup ? params.data.groupLabel : '',
      filter: 'agTextColumnFilter',
      filterValueGetter: (params) => params.data?.isGroup ? null : params.data.groupLabel,
      sortable: false,
      headerComponent: () => <strong>Group</strong>,
    },
    {
      field: 'client',
      headerName: 'Client ID',
      valueGetter: (params) => params.data?.isGroup ? '' : params.data.client,
      filter: 'agTextColumnFilter',
      filterValueGetter: (params) => params.data?.isGroup ? null : params.data.client,
      sortable: false,
      headerComponent: () => <strong>Client ID</strong>,
    },
    {
      field: 'sysPrin',
      headerName: 'Sys Prin',
      valueGetter: (params) => params.data?.isGroup ? '' : params.data.sysPrin,
      filter: 'agTextColumnFilter',
      filterValueGetter: (params) => params.data?.isGroup ? null : params.data.sysPrin,
      sortable: false,
      headerComponent: () => <strong>Sys Prin</strong>,
    },
    {
      field: 'name',
      headerName: 'Name',
      valueGetter: (params) => params.data?.isGroup ? '' : params.data.name,
      filter: 'agTextColumnFilter',
      filterValueGetter: (params) => params.data?.isGroup ? null : params.data.name,
      sortable: false,
      headerComponent: () => <strong>Name</strong>,
    },
    {
      field: 'address',
      headerName: 'Address',
      valueGetter: (params) => params.data?.isGroup ? '' : params.data.address,
      filter: 'agTextColumnFilter',
      filterValueGetter: (params) => params.data?.isGroup ? null : params.data.address,
      sortable: false,
      headerComponent: () => <strong>Address</strong>,
    },
    {
      field: 'active',
      headerName: 'Status',
      cellRenderer: (params) =>
        params.data?.isGroup ? '' : <input type="checkbox" disabled checked={params.value} />,
      filter: 'agSetColumnFilter',
      filterValueGetter: (params) => params.data?.isGroup ? null : String(params.data.active),
      sortable: false,
      headerComponent: () => <strong>Status</strong>,
    },
  ];

  const defaultColDef = {
    flex: 1,
    resizable: true,
    minWidth: 120,
    sortable: false,
    filter: true,
  };

  const rowClassRules = {
    'client-group-row': (params) => params.data?.isGroup && params.data?.groupLevel === 1,
    'sysprin-group-row': (params) => params.data?.isGroup && params.data?.groupLevel === 2,
  };

  const handleRowClicked = (event) => {
    const row = event.data;
    if (!row.isGroup && row.client) {
      localStorage.setItem('selectedClient', row.client);
      onRowClick(row);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: '#f8f9f9', color: 'black' }}>
            Sys Prins Clients
          </CCardHeader>
          <CCardBody>
            <CFormSelect
              className="mb-3"
              onChange={(e) => setSelectedClient(e.target.value)}
              value={selectedClient}
            >
              <option value="">-- Select Client ID --</option>
              {clientOptions.map(client => (
                <option key={client} value={client}>{client}</option>
              ))}
            </CFormSelect>
            <div className="ag-grid-container ag-theme-quartz" style={{ height: 500 }}>
              <AgGridReact
                rowData={tableData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowClassRules={rowClassRules}
                pagination={true}
                paginationPageSize={10}
                animateRows={true}
                onRowClicked={handleRowClicked}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ClientInformation;

import React, { useEffect, useRef, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { clientsJson } from './data.js';
import '../../../scss/sys-prin-configuration/client-information.scss';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const ClientInformation = ({ onRowClick }) => {
  const [selectedClient, setSelectedClient] = useState('ALL');
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [expandedGroups, setExpandedGroups] = useState({});
  const gridApiRef = useRef(null);

  useEffect(() => {
    const flattenedData = [];

    const clientsToShow = selectedClient === 'ALL'
      ? clientsJson
      : clientsJson.filter(c => c.client === selectedClient);

    clientsToShow.forEach(clientGroup => {
      const clientId = clientGroup.client;
      const clientName = clientGroup.name;
      const isExpanded = expandedGroups[clientId] ?? false;

      flattenedData.push({
        isGroup: true,
        groupLevel: 1,
        groupLabel: (
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-block',
              width: '18px',
              height: '18px',
              border: '1px solid #aaa',
              textAlign: 'center',
              fontSize: '12px',
              lineHeight: '16px',
              borderRadius: '3px',
              userSelect: 'none'
            }}>
              {isExpanded ? '−' : '+'}
            </span>
            <span>{clientId}</span>
          </span>
        ),
        client: clientId,
      });

      if (isExpanded) {
        clientGroup.sysPrins?.forEach(sysPrin => {
          flattenedData.push({
            isGroup: false,
            client: clientId,
            sysPrin: sysPrin.sysPrin,
            name: sysPrin.clientDTO.name,
            address: sysPrin.clientDTO.addr,
            city: sysPrin.clientDTO.city,
            state: sysPrin.clientDTO.state,
            zip: sysPrin.clientDTO.zip,
            contact: sysPrin.contact,
            phone: sysPrin.phone,
            active: sysPrin.active === 'Y',
          });
        });
      }
    });

    setTableData(flattenedData);
    setPageSize(flattenedData.length);

    setTimeout(() => {
      if (gridApiRef.current) {
        // gridApiRef.current.paginationSetPageSize(flattenedData.length);
        // gridApiRef.current.paginationGoToFirstPage();
      }
    }, 0);
  }, [selectedClient, expandedGroups]);

  const columnDefs = [
    {
      field: 'groupLabel',
      headerName: 'Clients',
      colSpan: (params) => (params.data?.isGroup ? 2 : 1),
      cellRenderer: (params) =>
        params.data?.isGroup
          ? params.data.groupLabel
          : '',
      valueGetter: () => '',
      filter: false,
    },
    {
      field: 'sysPrin',
      headerName: 'Sys Prin',
      filter: 'agTextColumnFilter',
      width: 400,
      minWidth: 350,
      cellRenderer: (params) => {
        if (params.data?.isGroup) return '';
        return (
          <span>
            <span role="img" aria-label="gear" style={{ marginRight: '6px' }}>⚙️</span>
            {params.value}
          </span>
        );
      },
      valueGetter: (params) => params.data?.isGroup ? '' : params.data.sysPrin,
    }
  ];

  const defaultColDef = {
    flex: 1,
    resizable: true,
    minWidth: 120,
    sortable: false,
    filter: false,
    floatingFilter: true,
  };

  const rowClassRules = {
    'client-group-row': (params) => params.data?.isGroup && params.data?.groupLevel === 1,
  };

  const handleRowClicked = (event) => {
    const row = event.data;

    if (row.isGroup && row.client) {
      setExpandedGroups(prev => ({
        ...prev,
        [row.client]: !prev[row.client],
      }));
    } else if (!row.isGroup && row.client) {
      localStorage.setItem('selectedClient', row.client);
      onRowClick(row);
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <CRow className="flex-grow-1">
        <CCol xs={12} className="d-flex flex-column h-100">
          <CCard className="flex-grow-1 d-flex flex-column">
            <div className="ag-grid-container ag-theme-quartz" style={{ flex: 1, minHeight: 0 }}>
              <AgGridReact
                rowData={tableData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowClassRules={rowClassRules}
                pagination={false}
                paginationPageSize={pageSize}
                onGridReady={(params) => {
                  gridApiRef.current = params.api;
                }}
                animateRows={true}
                onRowClicked={handleRowClicked}
              />
            </div>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default ClientInformation;

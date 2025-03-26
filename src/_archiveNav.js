import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSettings,
  cilSpeech,
  cilUser,
  cilCode,
  cilCloudDownload,
  cilEnvelopeClosed,
  cilSpreadsheet,
  cilLocationPin,
  cilEnvelopeOpen,
  cilTrash,
  cilSearch,
  cilBarcode,
  cilPrint,
  cilLink,
  cilCalendar,
  cilRecycle,
  cilStorage,
  cilChartLine,
  cilDollar,
  cilClock,
  cilXCircle,
  cilFile,
  cilTask,
  cilCog

} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import './scss/navigation.scss'; // Import custom styles




const _archiveNav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: () => (
      <li className="nav-title nav-title-black">
        File
      </li>
    ),
  },  
  {
    component: CNavItem,
    name: 'Connect Rapid3 Aechive',
    to: '/archive-dashboard',
    icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Print',
    to: '/theme/typography',
    icon: <CIcon icon={cilPrint} customClassName="nav-icon" />,
  },
  {
    component: () => (
      <li className="nav-title nav-title-black">
        Maintenance
      </li>
    ),
  },
  {
    component: CNavItem,
    name: 'Client Report Mapping',
    to: '/maintenance/client-report-mapping',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Resend Web Reports',
    to: '/maintenance/resend-web-reports',
    icon: <CIcon icon={cilSpeech} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Web Client Directory',
    to: '/maintenance/web-client-directory',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: () => (
      <li className="nav-title nav-title-black">
        Report
      </li>
    ),
  },
  {
    component: CNavItem,
    name: 'Input Robot Totals',
    to: '/report/input-rebot-totals',
    icon: <CIcon icon={cilRecycle} customClassName="nav-icon" />,
  },  
  {
    component: CNavItem,
    name: 'Billing',
    to: '/report/billing',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
  }, 
  {
    component: CNavItem,
    name: 'Unmatched Sys Prins',
    to: '/report/unmatch-sys-prins',
    icon: <CIcon icon={cilCloudDownload} customClassName="nav-icon" />,
  },    
  {
    component: CNavItem,
    name: 'Report Queries',
    to: '/report/report-queries',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  }, 
  {
    component: CNavItem,
    name: 'Email Event Id',
    to: '/report/email-event-id',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
  },              
  {
    component: CNavGroup,
    name: 'Query Maintenance',
    to: '/archive-query-maintenance',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Define Query',
        to: '/archive-query-maintenance/define-query',
      },
      {
        component: CNavItem,
        name: 'C3 File Transfer',
        to: '/archive-query-maintenance/c3-file-transfer',
      },
      {
        component: CNavItem,
        name: 'Data Definitions',
        to: '/archive-query-maintenance/data-definitions',
      },
      {
        component: CNavItem,
        name: 'Schedule Batch Report',
        to: '/archive-query-maintenance/schedule-batch-report',
      },
      {
        component: CNavItem,
        name: 'Table Load',
        to: '/archive-query-maintenance/table-load',
      },
      {
        component: CNavItem,
        name: 'Table Load Column Mapping',
        to: '/archive-query-maintenance/table-load-column-mapping',
      },
      {
        component: CNavItem,
        name: 'Tool Tips',
        to: '/archive-query-maintenance/tool-tips',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Edit',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Daily Message',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Sys/Prin Configuration',
        to: '/edit/sys-prin-config',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Multi Select'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/multi-select/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Range Slider'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/range-slider/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Rating'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/rating/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Date Picker'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/date-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Date Range Picker',
        href: 'https://coreui.io/react/docs/forms/date-range-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Time Picker'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/time-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _archiveNav

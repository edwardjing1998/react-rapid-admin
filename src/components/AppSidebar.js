import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'


import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

// sidebar nav config
import defaultNav from '../_nav'
import archiveNav from '../_archiveNav'
import { CSidebarNav } from '@coreui/react'


const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const location = useLocation()

    // 🔹 Add this line: it tracks which nav structure to use
    const [navItems, setNavItems] = useState(defaultNav)

      // 🔹 Add this logic to switch navigation based on URL

  useEffect(() => {
    if (location.pathname.startsWith('/archive-')) {
      setNavItems(archiveNav)
    } else {
      setNavItems(defaultNav)
    }
  }, [location])
  

  return (
    <CSidebar
      className="border-end"
      colorScheme="light"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">



      <CSidebarBrand to="/" className="w-100">
  <img
    src="src/assets/images/fiserv.png"
    alt="Logo"
    style={{
      width: '100%',          // 👈 makes it take full width of sidebar
      height: 'auto',         // 👈 keeps aspect ratio
      maxHeight: '60px',      // 👈 control how tall it can get
      objectFit: 'contain',   // 👈 prevents distortion
    }}
  />
</CSidebarBrand>

        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>

      <CSidebarNav>
        <AppSidebarNav items={navItems} />
      </CSidebarNav>

      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

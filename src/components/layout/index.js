import React from 'react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div className='app-content'>
      <div className='container'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout

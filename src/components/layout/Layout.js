import React, { Fragment } from 'react'
import Header from "../../components/common/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
        <Header />
        { children }
    </Fragment>
  )
}

export default Layout
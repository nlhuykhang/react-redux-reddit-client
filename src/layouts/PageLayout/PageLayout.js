import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { Grid } from 'react-bootstrap'

export const PageLayout = ({ children }) => (
  <Grid>
    <h1>React Redux Reddit Client</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    {' · '}
    <Link to='/login' activeClassName='page-layout__nav-item--active'>Login</Link>
    <div>
      {children}
    </div>
  </Grid>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout

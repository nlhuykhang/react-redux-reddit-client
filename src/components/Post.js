import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Post extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render () {
    const {
      title,
    } = this.props

    return (
      <div className=''>
        <h4 className=''>{title}</h4>
      </div>
    )
  }
}

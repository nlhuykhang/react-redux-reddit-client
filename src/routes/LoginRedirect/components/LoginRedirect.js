import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoginRedirect extends Component {
  static propTypes = {
    userLogin: PropTypes.func,
    code: PropTypes.string,
    isLogin: PropTypes.bool,
    router: PropTypes.object,
  }

  componentDidMount () {
    const {
      code,
      userLogin,
    } = this.props

    userLogin({ code })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isLogin) {
      nextProps.router.push('/test')
    }
  }

  render () {
    return (
      <div>
        fuck
      </div>
    )
  }
}

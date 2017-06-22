import React, { Component } from 'react'
import Snoowrap from 'snoowrap'
import PropTypes from 'prop-types'

export default class Test extends Component {
  static propTypes = {
    user: PropTypes.object,
  }
  componentDidMount () {
    console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.user)
    const r = new Snoowrap({
      userAgent: window.navigator.userAgent,
      clientId: 'K4BqkiNaZCwlIA',
      clientSecret: 'SlI--S25WsfEaj1EfisP8CgAV7k',
      refreshToken: nextProps.user.refresh_token,
      accessToken: nextProps.user.access_token,
    })

    console.log(r)

    r.getHot().map(post => post.title).then(console.log)
  }

  render () {
    return (
      <div>
        test
      </div>
    )
  }
}

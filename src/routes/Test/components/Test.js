import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Test extends Component {
  static propTypes = {
    user: PropTypes.object,
    getHotPost: PropTypes.func,
    posts: PropTypes.array,
  }

  componentWillReceiveProps (nextProps) {
    const {
      user,
      getHotPost,
    } = nextProps

    const currentUser = this.props.user

    if (
      user.refresh_token &&
      user.access_token &&
      currentUser.refresh_token !== user.refresh_token &&
      currentUser.access_token !== user.access_token
    ) {
      getHotPost({
        refreshToken: user.refresh_token,
        accessToken: user.access_token,
      })
    }
  }

  render () {
    console.log(this.props.posts);
    return (
      <div>
        {this.props.posts.map(post => <div key={post.id}>{post.id}</div>)}
      </div>
    )
  }
}

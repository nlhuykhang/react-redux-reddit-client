import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from '../../../components/Post'

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
      posts,
    } = nextProps

    const currentUser = this.props.user

    if (
      user.refresh_token &&
      user.access_token &&
      currentUser.refresh_token !== user.refresh_token &&
      currentUser.access_token !== user.access_token &&
      posts.length === 0
    ) {
      getHotPost()
    }
  }

  render () {
    return (
      <div>
        {this.props.posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    )
  }
}

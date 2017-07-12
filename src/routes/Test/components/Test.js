import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from '../../../components/Post'
import { exeActionIfNotLoggedIn } from '../../../helpers'

export default class Test extends Component {
  static propTypes = {
    user: PropTypes.object,
    getHotPost: PropTypes.func,
    posts: PropTypes.array,
    router: PropTypes.object,
  }

  componentDidMount () {
    const {
      router,
    } = this.props

    exeActionIfNotLoggedIn(this.props)(() => router.push('/login'))
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
        <button onClick={this.props.getHotPost}>Get hot posts</button>
        {this.props.posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    )
  }
}

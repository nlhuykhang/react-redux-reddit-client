import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from '../../../components/Post'
import { exeActionIfNotLoggedIn } from '../../../helpers'

function isBeforeOneHour (time) {
  return new Date().getTime() - time.getTime() > 3600000
}

export default class Test extends Component {
  static propTypes = {
    getHotPost: PropTypes.func,
    posts: PropTypes.array,
    router: PropTypes.object,
    lastReload: PropTypes.instanceOf(Date)
  }

  componentDidMount () {
    const {
      router,
      getHotPost,
      lastReload,
    } = this.props

    exeActionIfNotLoggedIn(this.props)(() => router.push('/login'))

    if (
      !lastReload ||
      isBeforeOneHour(lastReload)
    ) {
      getHotPost({ reload: true })
    } else {

    }
  }

  reloadHotPost = () => {
    this.props.getHotPost({ reload: true })
  }

  render () {
    return (
      <div>
        <button onClick={this.props.getHotPost}>Get more hot posts</button>
        <button onClick={this.reloadHotPost}>Reload hot posts</button>
        {this.props.posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    )
  }
}

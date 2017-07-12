import { connect } from 'react-redux'

import Test from '../components/Test'
import { getHotPost, getDenormalizedPosts } from '../../../store/post'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: getDenormalizedPosts(
      state.entities.posts.hotIds,
      state.entities.posts.byId,
    ).posts
  }
}

const mapDispatchToProps = {
  getHotPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Test)

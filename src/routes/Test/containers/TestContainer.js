import { connect } from 'react-redux'

import Test from '../components/Test'
import { getHotPost, getDenormalizedPosts } from '../../../store/post'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    // posts: state.entities.posts.allIds,
    posts: getDenormalizedPosts(
      state.entities.posts.allIds,
      state.entities.posts.byId,
    ).posts || []
    // posts: [],
  }
}

const mapDispatchToProps = {
  getHotPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Test)

import { connect } from 'react-redux'

import LoginRedirect from '../components/LoginRedirect'
import { userLogin } from '../../../store/user'

const mapStateToProps = (state, ownProps) => {
  const query = state.location.query
  return {
    code: query && query.code,
    isLogin: !!state.user.access_token,
  }
}

const mapDispatchToProps = {
  userLogin,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginRedirect)

import { connect } from 'react-redux'

import Login from '../components/Login'

const mapStateToProps = ({ user, loading }) => {
  return {
    user,
    loading,
  }
}

export default connect(mapStateToProps)(Login)

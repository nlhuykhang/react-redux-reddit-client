import { connect } from 'react-redux'

import Test from '../components/Test'

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Test)

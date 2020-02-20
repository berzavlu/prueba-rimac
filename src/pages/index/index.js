/* eslint-disable object-curly-newline */
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setPrices } from '../../actions/home'
import Home from './home'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  setPrices: (data) => dispatch(setPrices(data)),
})

const HomeMain = connect(mapStateToProps, mapDispatchToProps)(Home)

export default withRouter(HomeMain)

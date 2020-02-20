/* eslint-disable object-curly-newline */
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Precio from './precio'

const mapStateToProps = (state) => ({
  data: state,
})

const mapDispatchToProps = () => ({})

const PrecioMain = connect(mapStateToProps, mapDispatchToProps)(Precio)

export default withRouter(PrecioMain)

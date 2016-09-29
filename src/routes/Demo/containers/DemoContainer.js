import { connect } from 'react-redux'
import { dropMarker, checkMarkers } from '../modules/demo'
import Demo from 'components/Demo'

const mapActionCreators = {
  dropMarker,
  checkMarkers
}

const mapStateToProps = (state) => ({
  grid: state.demo.grid,
  markers: state.demo.markers,
  droppedMarkers: state.demo.droppedMarkers,
  ready: state.demo.ready,
  checked: state.demo.checked,
  valid: state.demo.valid
})

export default connect(mapStateToProps, mapActionCreators)(Demo)
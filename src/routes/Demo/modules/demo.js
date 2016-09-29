// ------------------------------------
// Constants
// ------------------------------------
export const DROP_MARKER = 'DROP_MARKER'
export const CHECK_MARKERS = 'CHECK_MARKERS'

// ------------------------------------
// Functions
// ------------------------------------
function getInitialState(){
    return {
        grid: {
            rows: 10,
            cols: 10,
            size: 40,
        },
        markers: [
            {
                x: 3,
                y: 6,
                color: '#269900'
            },
            {
                x: 9,
                y: 7,
                color: '#0000e6'
            },
            {
                x: 6,
                y: 2,
                color: '#ff8000'
            },
            {
                x: 4,
                y: 0,
                color: '#cc00cc'
            },
        ],
        droppedMarkers: [
        ],
        ready: false,
        checked: false,
        valid: false
    };
}

// ------------------------------------
// Actions
// ------------------------------------
export function dropMarker (value) {
  return {
    type: DROP_MARKER,
    payload: value
  }
}

export function checkMarkers (value) {
  return {
    type: CHECK_MARKERS,
    payload: null
  }
}

export const actions = {
    dropMarker,
    checkMarkers
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [DROP_MARKER]: (state, action) => {
        if(state.droppedMarkers.length == state.markers.length)
            return state;
            
        return {
            ...state, 
            droppedMarkers: [...state.droppedMarkers, action.payload],
            ready: state.droppedMarkers.length == state.markers.length - 1
        };
    },
    
    [CHECK_MARKERS]: (state, action) => {
      let length = state.droppedMarkers.filter((marker) => {
        return marker.x !== marker.col || marker.y !== marker.row;
      }).length;        
  
      return {...state, checked: true, valid: length == 0};
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = getInitialState();
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
import { HomeStates } from '../../constants/HomeConstants'

const initialState = {
  orders: null,
  currentState: 'nothing',
  hasError: false,
  error: null,
}

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'HOME_REQUEST':
      return {
        ...state,
        currentState: HomeStates.HOME_REQUEST,
        hasError: false,
        error: null
      }
    case 'HOME_SUCCESS':
      return {
        ...state,
        payloadData: action.payload,
        currentState: HomeStates.HOME_SUCCEED,
        hasError: false,
        error: null
      }
    case 'HOME_FAILURE':
      return {
        ...state,
        currentState: HomeStates.HOME_FAILED,
        hasError: true,
        error: action.payload
      }
    default:
      return state;
  }
}

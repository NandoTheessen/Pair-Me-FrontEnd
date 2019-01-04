import { LOGGED_IN, LOGGED_OUT, STORING_QUEUES, QUEUES_STORED } from '../actions/index'

const initialState = {
  email: null,
  access_token: null,
  name: null,
  isLoggedIn: false,
  error: null,
  teachers: [],
  students: [],
  username: '',
  storing_queues: false,
  queues_stored: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      const newState = { ...state, ...action.payload }
      newState.isLoggedIn = true
      return newState

    case LOGGED_OUT:
      return initialState

    case STORING_QUEUES:
      return Object.assign({}, state, {
        storing_queues: true,
        queues_stored: false,
      })

    case QUEUES_STORED:
      return Object.assign({}, state, {
        storing_queues: false,
        teachers: action.payload.teachers,
        students: action.payload.students,
        username: action.payload.username,
        queues_stored: true
      })

    default:
      return state
  }
}

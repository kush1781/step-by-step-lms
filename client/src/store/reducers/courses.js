const initalState = [];

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return {
        courses: action.courses
      }
    default:
      return state
  }
}

export default userReducer
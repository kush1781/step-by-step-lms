const initalState = [{ _id: '5f8b4e8b5f6351649068216e', name: 'Physics', standard: '10th', section: 'C', material: [], tests: [], posts: [] }];

const coursesReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return action.courses
    case 'EDIT_COURSE': {
      const courses = state;
      courses.map((course, index) => {
        if (course._id == action.course._id) {
          courses[index] = action.course;
        }
      })
      console.log(courses);
      return courses
    }
    default:
      return state
  }
}

export default coursesReducer
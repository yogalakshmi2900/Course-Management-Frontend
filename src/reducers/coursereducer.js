const initialState = {
  courseList  : [],
  courseCount : 0,
  courseDetail : [],
}

function CourseReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return Object.assign({}, state, {
         courseList  : action.payload.data,
         courseCount : action.payload.count
      })
      case "ADD_COURSELIST":
        return Object.assign({}, state, {
           courseDetail  : action.payload.data,
        })
      case "LIST_COURSE":
        return Object.assign({}, state, {
            courseList  : action.payload.data,
            courseCount : action.payload.count
        })
      case "VIEW_COURSE":
        return Object.assign({}, state, {
            courseList  : action.payload.data
        })
        case "VIEW_PROFILE":
          return Object.assign({}, state, {
              courseList  : action.payload.data
          })
    default:
      return state
  }
}

export default CourseReducer;

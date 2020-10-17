const initalState = [{
  _id: '1',
  name: 'Physics',
  standard: '10th',
  section: 'E',
  material: [{
    _id: '1',
    title: 'Week 1',
    body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
    link: 'https://www.google.com/'
  }, {
    _id: '2',
    title: 'Week 2',
    body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
    link: 'https://www.google.com/'
  }, {
    _id: '3',
    title: 'Week 3',
    body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
    link: 'https://www.google.com/'
  }],
  tests: [{
    _id: '1',
    title: 'Minor 1',
    body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
  }, {
    _id: '2',
    title: 'Minor 2',
    body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
  }, {
    _id: '3',
    title: 'Mid Sem',
    body: 'Date: 27th October Time: 3PM Duration: 3 hours'
  }],
  posts: []
}, {
  _id: '2',
  name: 'Chemistry',
  standard: '10th',
  section: 'E',
  material: [{
    _id: '1',
    title: 'Week 1',
    body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
    link: 'https://www.google.com/'
  }, {
    _id: '2',
    title: 'Week 2',
    body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
    link: 'https://www.google.com/'
  }, {
    _id: '3',
    title: 'Week 3',
    body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
    link: 'https://www.google.com/'
  }],
  tests: [{
    _id: '1',
    title: 'Minor 1',
    body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
  }, {
    _id: '2',
    title: 'Minor 2',
    body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
  }, {
    _id: '3',
    title: 'Mid Sem',
    body: 'Date: 27th October Time: 3PM Duration: 3 hours'
  }],
  posts: [{
    _id: '1',
    author: 'Manthan Tolia',
    date: '17/10/2020',
    body: 'I have a doubt please help me with it',
    link: 'https://www.google.com/',
    comments: [{
      _id: '1',
      author: 'Kushal Gupta',
      date: '17/10/2020',
      link: 'https://www.google.com/',
      body: 'Sure, I will help you'
    }, {
      _id: '2',
      author: 'Manthan Tolia',
      date: '17/10/2020',
      link: '',
      body: 'Thank you so much'
    }]
  }, {
    _id: '2',
    author: 'Manthan Tolia',
    date: '17/10/2020',
    link: '',
    body: 'I have a doubt please help me with it',
    comments: [{
      _id: '3',
      author: 'Kushal Gupta',
      date: '17/10/2020',
      link: '',
      body: 'Sure, I will help you'
    }, {
      _id: '4',
      author: 'Manthan Tolia',
      date: '17/10/2020',
      link: '',
      body: 'Thank you so much'
    }]
  }]
}];

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
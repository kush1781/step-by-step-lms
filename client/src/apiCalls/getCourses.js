const HOST = process.env.REACT_APP_HOSTNAME

const getCourses = async (body, userType) => {
  try {
    const res = await fetch(`http://${HOST}/api/courses/${userType.toLowerCase()}`, {
      method: "POST",
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const courses = await res.json();
    console.log(courses);
    return courses;
  } catch (e) {
    console.log(e)
  }
}

export default getCourses
const LOCAL_HOST = '192.168.119.1:5000';

const getCourses = async (body, userType) => {
  try {
    const res = await fetch(`http://${LOCAL_HOST}/api/courses/${userType.toLowerCase()}`, {
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
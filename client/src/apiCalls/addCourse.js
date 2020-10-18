const HOST = process.env.REACT_APP_HOSTNAME
const addCourse = async (body) => {
  try {
    const res = await fetch(`http://${HOST}/api/courses/addcourse`, {
      method: "POST",
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}

export default addCourse
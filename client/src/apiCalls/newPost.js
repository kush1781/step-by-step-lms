const HOST = process.env.REACT_APP_HOSTNAME;

const newPost = async (body) => {
  try {
    const res = await fetch(`http://${HOST}/api/courses/newpost`, {
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

export default newPost
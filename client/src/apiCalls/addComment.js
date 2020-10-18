const HOST = process.env.REACT_APP_HOSTNAME
const newComment = async (body) => {
  try {
    const res = await fetch(`${HOST}/api/courses/newcomment`, {
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

export default newComment
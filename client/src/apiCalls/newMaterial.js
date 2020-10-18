const LOCAL_HOST = '192.168.119.1:5000'
const newMaterial = async (body) => {
  console.log(body);
  console.log(LOCAL_HOST)
  try {
    const res = await fetch(`http://${LOCAL_HOST}/api/courses/newmaterial`, {
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

export default newMaterial
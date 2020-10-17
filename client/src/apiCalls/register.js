const LOCAL_HOST = '192.168.119.1:5000'
const register = async (user, userType) => {
  console.log(LOCAL_HOST)
  const body = JSON.stringify(user);
  try {
    const res = await fetch(`http://${LOCAL_HOST}/api/users/${userType.toLowerCase()}/register`, {
      method: "POST",
      body,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}

export default register
const HOST = process.env.REACT_APP_HOSTNAME

const login = async (body, userType) => {
  try {
    const res = await fetch(`${HOST}/api/users/${userType.toLowerCase()}/login`, {
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

export default login
const HOST = process.env.REACT_APP_HOSTNAME;

const register = async (user, userType) => {
  const body = JSON.stringify(user);
  try {
    const res = await fetch(`${HOST}/api/users/${userType.toLowerCase()}/register`, {
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
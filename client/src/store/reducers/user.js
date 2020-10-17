const initalState = {
    user: {
        name: 'Manny',
        _id: '5f8b4476b8ead664e017018b'
    },
    userType: 'Student'
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.user
        default:
            return state
    }
}

export default userReducer
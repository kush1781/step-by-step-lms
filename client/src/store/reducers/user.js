const initalState = { name: 'Manthan Tolia', userType: 'parent' }

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.user
        default:
            return state
    }
}

export default userReducer
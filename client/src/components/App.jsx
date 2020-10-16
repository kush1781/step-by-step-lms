import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import LoginHome from './pages/LoginHome'
import StudentHome from './pages/StudentHome'
import PrivateRouter from './PrivateRouter'
import userReducer from '../store/reducers/user'
import Course from './pages/Course';
import SignUp from './pages/SignUp';
import TeacherHome from './pages/TeacherHome';

const rootReducer = combineReducers({
  user: userReducer
})
const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <Switch>
        <PrivateRouter path="/" component={LoginHome} exact={true} />
        <Route path="/signup" component={SignUp} exact={true} />
        <PrivateRouter path="/student/home" component={StudentHome} exact={true} />
        <PrivateRouter path="/student/course/:id" component={Course} exact={true} />
        <PrivateRouter path="/teacher/home" component={TeacherHome} exact={true} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </Provider>
  )
}

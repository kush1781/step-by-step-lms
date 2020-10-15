import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/login" />
        )
    )} />
  )
}
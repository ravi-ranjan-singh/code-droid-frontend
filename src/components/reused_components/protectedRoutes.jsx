import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (localStorage.getItem('userName') === null) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { location: props.location } }}
            />
          );
        }

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;

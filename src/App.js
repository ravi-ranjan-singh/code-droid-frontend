import { Switch, Route, Redirect } from 'react-router-dom';
import DashBoard from './components/dashboard/dashboard';
import IDE from './components/ide/ide';
import Footer from './components/footer/footer';
import HeroSection from './components/hero/hero';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import NotFound from './components/not_found/notFound';
import LogOut from './components/logout/logout';
import ProtectedRoute from './components/reused_components/protectedRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          path="/login"
          render={(props) =>
            localStorage.getItem('userName') ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login {...props} />
            )
          }
        />
        <Route path="/logout" component={LogOut} />
        <ProtectedRoute path="/dashboard" component={DashBoard} />
        <ProtectedRoute path="/ide" component={IDE} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={HeroSection} exact />
        <Redirect from="/signup" to="/"></Redirect>
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

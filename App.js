import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/SignIn-Up';
import Welcome from './components/Pages/Welcome';
import Inbox from './components/Pages/Inbox';
import Navigation from './components/Navigation/Navigation';
import { useContext } from 'react';
import AuthContext from './store/mail-context';

function App() {
  const aCtx = useContext(AuthContext);
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        {aCtx.isLoggedIn && (
          <Route path="/welcome">
            <Welcome />
          </Route>
        )}
        {aCtx.isLoggedIn && (
          <Route path="/inbox">
            <Inbox />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;

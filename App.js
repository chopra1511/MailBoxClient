import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/SignIn-Up';
import Welcome from './components/Pages/Welcome';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/welcome" >
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

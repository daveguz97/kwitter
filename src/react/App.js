import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import NotFound from './NotFound';
import Register from './components/Register';
import 'semantic-ui-css/semantic.min.css';
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profiles/:username' component={Profile} />
        <Route path='*' component={NotFound} />
        <Route exact path='/register-form' component={Register} />
      </Switch>
    );
  }
}

export default App;


import React from 'react';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Profile from './profile';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (


    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={ Dashboard }/>
            <Route path='/signup' component={ Signup } />
            <Route path='/login' component={ Login } />
          </Switch>

        </AuthProvider>
      </Router>
    </div>


  );
}
export default App;

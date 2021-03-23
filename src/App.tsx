import 'react-toastify/dist/ReactToastify.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './containers/Home';
import LogIn from './containers/LogIn';
import { Provider } from 'react-redux'
import SignUp from './containers/SignUp';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/auth/login'} exact component={LogIn} />
          <Route path={'/auth/signup'} exact component={SignUp} />
        </Switch>
      </Router>
    <ToastContainer />
    </Provider>
  );  
}

export default App;

import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import { loginRequest } from '../redux/auth/actions';
import { toast } from 'react-toastify';

function LogIn() {
  const dispatch = useDispatch();
  const { toastMsg, loginTries, authedSuccessfully } = useSelector((state: any) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(toastMsg) {
      toast.error(toastMsg, { autoClose: 4000 });
    }
  }, [toastMsg, loginTries]);

  const formSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password }));
  };

  if(authedSuccessfully) {
    return <Redirect to={'/'} />
  }

  return (
    <div className='container mt-4'>
      <form onSubmit={formSubmit}>
        <h1>Log In</h1>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input 
            type='text' 
            className='form-control' 
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input 
            type='password' 
            className='form-control' 
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <Link to={'/auth/signup'} style={{ float: 'right' }}>
          Don't have an account? Sign up!
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
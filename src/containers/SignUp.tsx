import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import { signupRequest } from '../redux/auth/actions';
import { toast } from 'react-toastify';

function SignUp() {
  const dispatch = useDispatch();
  const { toastMsg, loginTries, authedSuccessfully } = useSelector((state: any) => state.auth);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(toastMsg) {
      toast.error(toastMsg, { autoClose: 4000 });
    }
  }, [toastMsg, loginTries]);

  const formSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signupRequest({ username, password, email }));
  };

  if(authedSuccessfully) {
    return <Redirect to={'/'} />
  }

  return (
    <div className='container mt-4'>
      <form onSubmit={formSubmit}>
        <h1>Sign Up</h1>
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
          <label htmlFor='username'>Email:</label>
          <input 
            type='email' 
            className='form-control' 
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
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
          Already have an account? Sign in!
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
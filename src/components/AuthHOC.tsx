import React, { FunctionComponent } from 'react';

import { Redirect } from 'react-router-dom';

type ComponentState = {
  isAuthed: boolean;
};

const AuthHOC = (Component: FunctionComponent) => {
  return class extends React.Component<{}, ComponentState> {
    constructor(props: any) {
      super(props);

      this.state = {
        isAuthed: true
      };
    }
    
    componentDidMount() {
      if(!localStorage.getItem('TOKEN')) {
        this.setState({ isAuthed: false });
      }
    }

    render() {
      if(!this.state.isAuthed) {
        return <Redirect to={'/auth/login'} />;
      }
      return <Component {...this.props} />;
    }
  };
}

export default AuthHOC;
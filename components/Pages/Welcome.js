import {Fragment} from 'react';
import TextEditor from './TextEditor';


const Welcome = (props) => {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3>Welcome to Your Mail Box!</h3>
        </nav>
          <TextEditor />
          
      </Fragment>
    );
};

export default Welcome;
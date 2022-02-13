import { Fragment } from "react";

import TextEditor from "./TextEditor";

const Welcome = (props) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">
            Welcome to your MailBox!
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="/inbox">
                Inbox
              </a>
            </div>
          </div>
        </div>
      </nav>
      <TextEditor />
    </Fragment>
  );
};

export default Welcome;

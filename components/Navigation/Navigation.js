import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react/cjs/react.production.min";
import AuthContext from "../../store/mail-context";

const Navigation = () => {
  const history = useHistory();
  const aCtx = useContext(AuthContext);
  const logoutHandler = () => {
    aCtx.logout();
    history.replace("/");
  };

    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=" ">
              MyWebLink
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href=" ">
                  HOME
                </a>
                <a className="nav-link" href=" ">
                  PRODUCTS
                </a>
                <a className="nav-link" href=" ">
                  ABOUT US
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-danger" onClick={logoutHandler}>
              LogOut
            </button>
          </div>
        </nav>
      </Fragment>
    );
};

export default Navigation;
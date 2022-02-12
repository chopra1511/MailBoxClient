import { Fragment } from "react/cjs/react.production.min";

const Navigation = () => {
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
        </nav>
      </Fragment>
    );
};

export default Navigation;
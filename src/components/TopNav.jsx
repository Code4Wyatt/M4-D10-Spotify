import React from 'react';

class TopNav extends React.Component {
  render() {
    return (
      <div className="topNav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="arrows d-flex">
                <a className="directionButtonLeft" href="#">
                  <p className="arrowLeft">&lt;</p>
                </a>
                <a className="directionButtonRight" href="#">
                  <p className="arrowRight">&gt;</p>
                </a>
              </div>
              <div className="topMenu d-flex">
                <a className="trending" href="#">
                  Trending
                </a>
              </div>
              <div className="userSect">
                <div className="dropdown">
                  <a href="login.html">
                    <button
                      className="btn btndropdown btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img className="userImg" src="\assets\vs.png" /> Paul
                      Murray
                    </button>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;

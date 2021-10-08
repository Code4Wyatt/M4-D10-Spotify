import React from "react";
import Nav from "react-bootstrap/Nav";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav className="nav flex-column verticalNav">
        <br />
        <img className="logo" src="assets/Logo.png" />
        <br />
        <div className="d-flex">
          <img className="logoHome" src="./assets/output-onlinepngtools.png" />
          <a className="nav-link active" href="#">
            <p className="homeTxt">Home</p>
          </a>
        </div>
        <div className="d-flex">
          <img
            className="logoSearch"
            src="/Assets/output-onlinepngtools (1).png"
          />
          <a className="nav-link" href="#">
            <p className="searchTxt">Search</p>
          </a>
        </div>
        <div className="d-flex">
          <img
            className="logoLibrary"
            src="/Assets/output-onlinepngtools (2).png"
          />
          <a className="nav-link" href="#">
            <p className="libraryTxt">Your Library</p>
          </a>
        </div>
        <br />
        <div className="d-flex">
          <img className="logoPlaylist" src="/Assets/createicon.png" />{" "}
          <a className="nav-link" href="#">
            <p className="createPlaylistTxt">Create Playlist</p>
          </a>
        </div>
        <div className="d-flex">
          <img className="logoSpotifyHeart" src="/Assets/Liked song icon.png" />
          <a className="nav-link" href="#">
            <p className="likedSongsTxt">Liked Songs</p>
          </a>
        </div>
        <ul>
          <li>
            <a className="nav-link" href="#">
              Funky Heavy Bluesy
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Your Top Songs 2020
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              In Love With You - Erykah Blahdeyblah
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              This Is Rod Stewart
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              FRANCHISE ft. Young Thug
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Your Top Songs 2019
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Pallaggio
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              This Is Joe Bonamassa
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              June 19
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Jack 30th Party 2
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Jack 30th Party
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              This Is Opeth
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Metal Ballads
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              New Playlist
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Your Top Songs 2018
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Jazz Classics
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Blues Classics
            </a>
          </li>
        </ul>
        <div className="d-flex">
          <img
            className="logoInstall"
            src="assets/output-onlinepngtools (4).png"
          />{" "}
          <a className="nav-link install" href="#">
            Install App
          </a>
        </div>
      </Nav>
    );
  }
}

export default NavigationBar;

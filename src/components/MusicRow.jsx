import React from 'react';

class MusicRow extends React.Component {
    
    URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

    // state = {
    //     gallery1: [],
    //     gallery2: [],
    //     gallery3: [],
    //     searchString: "",
    //     loading: true,
    //     error: false,
    //     selectedSong: null,
    // };

    // fetchSearchResult = async () => {
    //     try {
    //         const response = await fetch(this.URL + this.props.searchString);
    //         if (response.ok) {
    //             const data = await response.json();
    //             if (data.Response === "True") {
    //                 this.setState({ searchResults: data.Search, error: false });
    //             } else {
    //                 this.setState({ error: true });
    //             }
    //         } else {
    //             this.setState({ error: true });
    //             console.log("An error occurred");
    //         }

    //     } catch (err) {
    //         this.setState({ error: true });
    //         console.log(err.message);
    //     }
    // };

    componentDidMount = () => {
        this.fetchSongs();
    }

    fetchSongs = () => {
        Promise.all([
            fetch(this.URL + "queen")
                .then((response) => response.json())
                .then((responseObject) => {
                    if (responseObject.Response === "True") {
                        this.setState({ gallery1: responseObject.Search });
                    } else {
                        this.setState({ error: true });
                    }
                }),
            fetch(this.URL + "metallica")
                .then((response) => response.json())
                .then((responseObject) => {
                    if (responseObject.Response === "True") {
                        this.setState({ gallery2: responseObject.Search });
                    } else {
                        this.setState({ error: true });
                    }
                }),
            fetch(this.URL + "behemoth")
                .then((response) => response.json())
                .then((responseObject) => {
                    if (responseObject.Response === "True") {
                        this.setState({ gallery3: responseObject.Search });
                    } else {
                        this.setState({ error: true });
                    }
                }),
        ])
            .then(() => this.setState({ loading: false }))
            .catch((err) => {
                this.setState({ error: true });
                console.log("An error has occurred:", err);
            });
    };
    
  render() {
    return (
      <div className="container-fluid-recently showsToTryOptions album-titles">
        <div className="row row-cols-8">
          <div className="col-sm d-flex">
            <a className="cardBg" href="#">
              <div className="card" style={{ width: "100px !important" }}>
                <img
                  className="card-img-top-recently"
                  src="/Assets/coldplay.png"
                  alt="Card image cap"
                />
                <div className="card-body-recently">
                  <h5 className="card-title">Coldplay</h5>
                  <p className="card-text-recently">A Head Full Of Dreams</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm d-flex">
            <a className="cardBg" href="#">
              <div className="card" style={{ width: "100px !important" }}>
                <img
                  className="card-img-top-recently"
                  src="/Assets/jcole.jpg"
                  alt="Card image cap"
                />
                <div className="card-body-recently">
                  <h5 className="card-title">J Cole</h5>
                  <p className="card-text-recently">KOD</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm d-flex">
            <a className="cardBg" href="#">
              <div className="card" style={{ width: "100px !important" }}>
                <img
                  className="card-img-top-recently"
                  src="/Assets/QUEEN.jfif"
                  alt="Card image cap"
                />
                <div className="card-body-recently">
                  <h5 className="card-title">Queen</h5>
                  <p className="card-text-recently">Hot Space</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm d-flex">
            <a className="cardBg" href="#">
              <div className="card" style={{ width: "100px !important" }}>
                <img
                  className="card-img-top-recently"
                  src="/Assets/log.jfif"
                  alt="Card image cap"
                />
                <div className="card-body-recently">
                  <h5 className="card-title">Lamb of God</h5>
                  <p className="card-text-recently">Wrath</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm d-flex">
            <a className="cardBg kanye" href="#">
              <div className="card" style={{ width: "100px !important" }}>
                <img
                  className="card-img-top-recently"
                  src="/Assets/kanye.jpg"
                  alt="Card image cap"
                />
                <div className="card-body-recently">
                  <h5 className="card-title">Kanye West</h5>
                  <p className="card-text-recently">Graduation</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm d-flex">
            <a className="cardBg gorillaz" href="#">
              <div className="card" style={{ width: "100px !important" }}>
                <img
                  className="card-img-top-recently"
                  src="/Assets/gorillaz.jpg"
                  alt="Card image cap"
                />
                <div className="card-body-recently">
                  <h5 className="card-title">Gorillaz</h5>
                  <p className="card-text-recently">The Fall</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm d-flex">
            <a className="cardBg steve" href="#">
              <div className="card" style={{ width: "100px !important" }}>
                <img
                  className="card-img-top-recently"
                  src="/Assets/steve.jpg"
                  alt="Card image cap"
                />
                <div className="card-body-recently">
                  <h5 className="card-title">Steve Vai</h5>
                  <p className="card-text-recently">The Ultra Zone</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm d-flex">
            <a className="cardBg megadeth" href="#">
              <div className="card" style={{ width: "100px !important" }}>
                <img
                  className="card-img-top-recently"
                  src="/Assets/megadeth.jpg"
                  alt="Card image cap"
                />
                <div className="card-body-recently">
                  <h5 className="card-title">Megadeth</h5>
                  <p className="card-text-recently">Rust In Peace</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicRow;

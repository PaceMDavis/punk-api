import React from 'react';
import logo from './logo.svg';
import './App.css';


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: false,
    }
  }
  clickedLike = () => {
    this.setState ({
      likes: !this.state.likes
    })
  }
  
  render(i) {
    const likes = this.state.likes;
    console.log("hello")

    return (
    <button className="likeButton" key={i} onClick={() => this.clickedLike()}>{likes ? "Unlike" : "Like"}</button>
    )
  }
}


class App extends React.Component {
  state = {
    beers: []
  }
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState ({
        beers: data
      })
    })
  }
  render() {
    console.log(this.state);
    return (
        <div>
          <h1> Beer Selection</h1>
          {this.state.beers.map((beer, index) => {
            // let drink = beer
            console.log("You found me!", beer)
            return (
            <div  key= {index}>
              <li>{beer.name + " - " + beer.tagline}</li>
              <LikeButton/>
              
            </div>
              )
          })}
        </div>
    );
  }
}

export default App;

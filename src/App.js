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
  // state = {
  //   likes: false,
  // }
  clickedLike = () => {
    // const likes = this.state.likes;
    this.setState ({
      likes: !this.state.likes
    })
  }
  
  render(i) {
    const likes = this.state.likes;
    console.log("hello")
    // const click = likes.map((liked) => {
    //   if(liked == )
    // })

    return (
    <button className="likeButton" key={i} onClick={() => this.clickedLike()}>{likes ? "Unlike" : "Like"}</button>
    )
  }
  // clickedLike = (event,index) => {
  //   // const likes  = this.state.likes 
  //   this.setState({
  //     likes: !this.state.likes
  //   })
  // }
  //   render() {
  //     const likes = this.state.likes
  //     // console.log(likes, "wowza")
  //     const click = likes && this.likes.map((liked) => {
  //     const favorited = liked ?
  //     'Like' : 'Unlike'
  //     // console.log(click, "hey")
  //   return (
  //     <button key={liked} onClick = {() => likes}></button>
  //   )
  // })
  // return (
  //   <button>{this.clickedLike}</button>
  // )
  // } 
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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import UserProfile from './components/UserProfile/UserProfile';

class App extends Component {
  constructor(){
    super();
    this.state={
      route:'signin',
      isSignedIn:false,
    }
  }
  onRouteChange=(route)=>{
    if(route==='signin'|| route==='register'){
      this.setState({isSignedIn:false})
    }else if(route==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }
  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn}onRouteChange={this.onRouteChange}/>
        { this.state.route==='home' ?
           <UserProfile />:
           (this.state.route==='signin'?
             <Signin onRouteChange={this.onRouteChange}/>:
             <Register onRouteChange={this.onRouteChange} />
           )
        }
      </div>
    );
  }
}

export default App;

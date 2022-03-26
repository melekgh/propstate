import React, { Component } from 'react'
import Profilee from './component/Profilee'
import myImg from './assets/252.jpg'
export default class App extends Component {
  constructor(){
    super()
    this.state ={
      show:true
    }
    this.handlClick =()=>{
      this.setState ({
        show :!this.state.show
      })
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handlClick}>click me !!</button>
        {this.state.show ?(
          <Profilee
            name="melek"
            lastName="ghrab"
            bio="devolopper"
            src={myImg}
            handlClick={this.handlClick}
          />) : null
        
      }
      </div>
    );
  }
}


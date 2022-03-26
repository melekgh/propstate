import React, { Component } from 'react'

export default class Profilee extends Component {
  constructor(props){

    super(props)
    this.state={
      count :0,
      intervalle : null
    }
  }
    componentDidMount (){
      this.setState({
        intervalle : setInterval(() => {
          this.setState({
            count : this.state.count +1
          })
        },1000)
    
    })
  
}
componentWillUnmount(){
  clearInterval(this.state.intervalle)
}
  render() {
    const{ name,lastName ,bio,src ,}=this.props

    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>profile </h1>
        <h1>{name}</h1>
        <h1>{lastName}</h1>
        <h2>{`hi i am a ${bio}`}</h2>
        <img src={src} alt="logo" />
        
        
        
        
        
        </div>
    )
  }
}


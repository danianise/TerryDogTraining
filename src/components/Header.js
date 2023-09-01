import React from 'react'
import NavBar from './NavBar'

export default function Header({title}) {

  if(title){
    return (
      <div>
          <h1 id='main_h1'>Dog Training with Terry Cormier ... {title}</h1>
        <img id='dog_banner' src="images/dog_banner.png"/>
        <NavBar />
      </div>
    )
  } else {
    return (
      <div>
          <h1 id='main_h1'>Dog Training with Terry Cormier</h1>
        <img id='dog_banner' src="images/dog_banner.png"/>
        <NavBar />
      </div>
    )
  }
}

import React from 'react'
import Comp4 from './Comp4'

const Comp3 = ({user}) => {
  return (
    <div>
      <h1 style={{color:'crimson'}}>Component 3</h1>
      <Comp4 user={user}/>
    </div>
  )
}

export default Comp3

import React from 'react'

const App = () => {
  let instructor = 'Love Babbar'
  return (
    <div>
      <h1>My first ReactApp</h1>

      <h2 style={{color: 'red'}}>Code Help</h2>
      <h3>{instructor}</h3>
    </div>
  )
}

export default App
import React from 'react'

export default function Species(props) {
  return (
    <div>
      <h2>Species</h2>
      {
        props.species.map((specie, index) => {
          return (
            <button key={index} onClick={props.handleSpecies} value={specie}>
              {specie}
            </button>
          )

        })
      }
      <button onClick={props.handleAllSpecies} >All items</button>
    </div>
  )
}

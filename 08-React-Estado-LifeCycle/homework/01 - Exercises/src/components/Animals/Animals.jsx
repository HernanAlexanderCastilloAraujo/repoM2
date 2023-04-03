import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super( props)
  }

  render () {
    return <div>{
      this.props.animals.map((animal) => {
        return (
          <div key={animal.id}>
            <h3>{animal.name}</h3>
            <img src={animal.image} alt={animal.name} width ="300px" />
            <p>{animal.specie}</p>
<hr />
          </div>
        )
      })
      }</div>
  }
}

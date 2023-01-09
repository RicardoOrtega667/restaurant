import React from 'react'

const card = ({alimento}) => {
  return (
    <div className="card">
      <h2>{alimento.descripcion + ' ' + alimento.precio}</h2>
    </div>
  )
}

export default card
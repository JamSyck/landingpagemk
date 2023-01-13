import React from 'react'
import './CharactersMK.css';

function CharacterMK({nombre,perfil}) {
  return (
    <div className='CharMK'>
        <img src={perfil}/>
        <h3>{nombre}</h3>
        <br/>
    </div>
  )
}

export default CharacterMK
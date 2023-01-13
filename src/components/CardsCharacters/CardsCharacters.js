import React from 'react'
import lk from './liukang.png'
import k from './kitana.png'
import j from './jade.png'
import m from './mileena.png'
import s from './sindel.png'
import sb from './sonya.png'
import sk from './skarlet.png'
import t from './tanya.png'
import jq from './jacqui.png'
import CharacterMK from './CharacterMK'
import './CharactersMK.css';

const mkchar = [
    {
        id:1,
        image:lk,
        name: 'Liu Kang'
    },
    {
        id:2,
        image:k,
        name: 'Kitana'
    },
    {
        id:3,
        image:j,
        name: 'Jade'
    },
    {
        id:4,
        image:m,
        name: 'Mileena'
    },
    {
        id:5,
        image:s,
        name: 'Sindel'
    },
    {
        id:6,
        image:sk,
        name: 'Skarlet'
    },
    {
        id:7,
        image:t,
        name: 'Tanya'
    },
    {
        id:8,
        image:sb,
        name: 'Sonya'
    },
    {
        id:9,
        image:jq,
        name: 'Jacqui'
    },
]

function CardsCharacters(){
    return(
        <div className='cardschar'>
            {
                mkchar.map(card => (
                    <div key={card.id}>
                        <CharacterMK nombre={card.name} perfil={card.image}/>
                    </div>
                ))
            }
        </div>
    )
}
export default CardsCharacters;
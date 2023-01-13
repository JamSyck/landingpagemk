import React from 'react';
import {NavbarApp} from '../components/NavbarApp/NavbarApp';
import {FooterApp} from '../components/FooterApp/FooterApp';
import CardsCharacters from '../components/CardsCharacters/CardsCharacters';

function Characters(){
    return(
        <div>
            <NavbarApp/>
            <CardsCharacters/>
            <FooterApp/>
        </div>
    )
}
export default Characters;
import React from 'react';
import {NavbarApp} from './components/NavbarApp/NavbarApp';
import {FooterApp} from './components/FooterApp/FooterApp';
import CharacterApp from './components/CharacterApp/CharacterApp';

function Characters(){
    return(
        <div>
            <NavbarApp/>
            <CharacterApp/>
            <FooterApp/>
        </div>
    )
}
export default Characters;
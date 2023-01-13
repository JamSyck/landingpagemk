import React from 'react'
import {NavbarApp} from '../components/NavbarApp/NavbarApp'
import {SliderApp} from '../components/SliderApp/SliderApp'
import {TextApp} from '../components/TextApp/TextApp'
import {CardsApp} from '../components/CardsApp/CardsApp'
import {FooterApp} from '../components/FooterApp/FooterApp'

function Home(){
    return(
        <div>
            <NavbarApp/>
            <SliderApp/>
            <TextApp/>
            <CardsApp/>
            <FooterApp/>
        </div>
    )
}

export default Home;
import React from 'react'
import {NavbarApp} from '../components/NavbarApp/NavbarApp'
import {FooterApp} from '../components/FooterApp/FooterApp'
import {HistoryApp} from '../components/HistoryApp/HistoryApp'

function History(){
    return(
        <div>
            <NavbarApp/>
            <HistoryApp/>
            <FooterApp/>
        </div>
    )
}
export default History;
import React from 'react'
import { NavLink } from 'react-router-dom'



const NavigationMap = () => {
        return(
            <header>
                <div className="bannermap">
                    <ul>
                        <NavLink exact to="/" activeClassName="navActive">
                            <li><input type="button" className="buttonConnexion" value="Accueil"/></li>
                        </NavLink>
                            <li><a href="http://projet5.projet-web-opc.fr/PhpProjet5/" className="buttonConnexion">Se connecter</a></li>
                    </ul>
                </div>
            </header>
        )
}                 


export default NavigationMap


import React  from 'react'


const SearchBarMap = () =>  {
        return (
            <div className='searchMap'>
                <p>Sélectionner votre type de restaurant:</p>
                <div>
                    <input type="checkbox" id="salade" name="salade" checked/>
                    <label htmlfor="salade">Salade</label>
                </div>
                <div>
                    <input type="checkbox" id="burger" name="burger"/>
                    <label htmlfor="burger">Burger</label>
                </div>
                <div>
                    <input type="checkbox" id="pizza" name="pizza"/>
                    <label htmlfor="pizza">Pizza</label>
                </div>
                <div>
                    <input type="checkbox" id="cafe" name="cafe"/>
                    <label htmlfor="cafe">Café</label>
                </div>
            </div>
        )
}

export default SearchBarMap

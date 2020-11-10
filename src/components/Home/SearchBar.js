import React  from 'react'
import { NavLink } from 'react-router-dom'

const SearchBar = () =>  {
        return (
            <div className='search'>
                <NavLink exact to="/Map" activeClassName="navActive">
                    <button type="submit" className="searchButton">Rechercher un restaurant</button>
                </NavLink>
            </div>
        )
}

export default SearchBar

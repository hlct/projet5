import React from 'react'
import '../App.css'
import Navigation from '../components/Home/Navigation'
import SearchBar from '../components/Home/SearchBar'
import News from '../components/Home/News'
import Newsletter from '../components/Home/Newsletter'
import Contact from '../components/Home/Contact'


const Home = () => {
  return (
    <div className='box'>
      <Navigation />
      <div className='titre'>
        <h1>SearchFood</h1>
        <p>Grâce à notre application venez consulter les meilleurs restaurants de la ville de Lyon.<br/><br/>Toutes les semaines venez découvrir les nouveautés culinaires de votre ville.</p>
      </div>
      <SearchBar />
      <div className="titrecards">
        <h1>Restaurants par catégories</h1>
        <p>Rechercher vos plats favoris à l'aide de notre barre de recherche qui vous permettra de filtrer vos choix par catégorie.</p>
      </div>
      <div className='cards'>
        <div className='card'>
       <img src="./img/food1.jpg"></img>
          <h2>Salade</h2>
        </div>
        <div className='card'>
        <img src="./img/food2.jpg" alt="food2"/>
          <h2>Burger</h2>
        </div>
        <div className='card'>
        <img src="./img/food3.jpg" alt="food3"/>
          <h2>Pizzeria</h2>
        </div>
        <div className='card'>
        <img src="./img/food4.png" alt="food4"/>
          <h2>Café</h2>
        </div>
      </div>
      <Newsletter />
      <News />
      <Contact />
    </div>
  )
}

export default Home

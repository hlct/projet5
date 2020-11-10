import React  from 'react'


const News = () =>  {
        return (
            <div>
                <div className="titrenews"> 
                    <h1>Venez découvrir les nouveautés</h1>
                    <p>Grâce à notre réseau vous pouvez découvrir en avant première les derniers restaurants qui viennent d'ouvrir<br />et récupérer facilement leurs positions pour commencer à réserver une table.</p>
                </div>
                <div className='new'>
                    <div className='news1'>
                        <h2>Culina Hortus</h2>
                        <p>Restaurant à Salade</p>
                    </div>
                    <div className='news2'>
                        <h2>Aromatic Restaurant</h2>
                        <p>Restaurant à Burger</p>
                    </div>
                    <div className='news3'>
                        <h2>Monsieur P</h2>
                        <p>Pizzeria</p>
                    </div>
                    <div className='news4'>
                        <h2>Hard Rock Cafe</h2>
                        <p>Café</p>
                    </div>
                </div>
            </div>
        )
}

export default News

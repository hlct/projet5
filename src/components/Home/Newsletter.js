import React,{Component}  from 'react'
import { Redirect } from 'react-router-dom'

class Newsletter extends Component{
    state={
        goToMap:false
    }

    handleClick = () =>{
        this.setState({goToMap:true})
    }
    render(){
        if(this.state.goToMap){
            return <Redirect push to="/Map"/>
        }
        return (
            <div id="newsletter" className="newsletter">
                <div className="abonner">
                    <h2>Une idée de recette ?</h2>
                    <p>Grâce à nos partenaires étoilés des meilleurs restaurant de Lyon<br/> toutes les semaines découvrez une recette simple et équilibrée à faire chez vous !</p>
                    <button className="abonnerbouton"
                    onClick={this.handleClick}>
                        Consulter les restaurants
                    </button>
                </div>
            </div>
        )
    }
}

export default Newsletter



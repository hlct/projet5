import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow,Marker } from 'google-maps-react';
import axios from 'axios';
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';


export class MapContainer extends Component {
  
  constructor(){
    super();
    this.state = {
      restos: [],
      showingInfoWindow: false,  //Cache ou affiche l'infoWindow
      activeMarker: {},          //Affiche le marqueur actif au clic
      selectedPlace: {},         //Affiche l'infoWindow à l'endroit sélectionné sur un marqueur
      maCategorie:"",
      maNote:"",
      noRestaus:false
    }
  }

componentDidMount() {
  axios.get(`http://projet5.projet-web-opc.fr/PhpProjet5/stockage.json`)
    .then(res => {
      const restos = res.data;
      this.setState({ restos });
      if(res.data.length !== 0){
        this.setState({noRestaus:true});
      }
    })
}

onMarkerClick = (props, marker) =>
  this.setState({
  selectedPlace: props,
  activeMarker: marker,
  showingInfoWindow: true,

});

onClose = () => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
displayMarkers = () => {
    const mesPositions = [];//création d'un tableau
    this.state.restos.forEach(marker => {//boucle sur le fichier json
        const positionMarker = [marker.lat,marker.lng];//recuperation de la position 
        if(marker.categorie.indexOf(this.state.maCategorie)=== -1){// affiche le marker correspondant si il y a moins un champs 
          return;
        }
        if(marker.note.indexOf(this.state.maNote)=== -1){
          return;
        }
        mesPositions.push(//afficher les markers sur la carte 
        <Marker key={marker.id} id={marker.id} position={{
          lat: marker.lat,
          lng: marker.lng,
        }
     }
     //Active et afficher le marker
        onClick={this.onMarkerClick}
        name={marker.name} 
        adresse={marker.adresse}
        categorie={marker.categorie}
        />)
      
    });
    return mesPositions;
}
displayRestos = () => {
  const mesRestos = [];//création d'un tableau
  let countResto = 0;
  this.state.restos.forEach(marker => {//boucle sur le fichier json
      if(marker.categorie.indexOf(this.state.maCategorie)=== -1){// affiche le marker correspondant si il y a moins un champs 
        return;
      }
      if(marker.note.indexOf(this.state.maNote)=== -1){
        return;
      }
      mesRestos.push(
      <span key={marker.id} className="displayresto">
        <h2>{marker.name}</h2>
        <br/>
        <strong>Adresse : </strong>{marker.adresse}
        <br/>
        <br/>
        <strong>Téléphone : </strong>{marker.phone}
        <br/>
        <br/>
        <strong>Note : </strong>{marker.note}
        <br/>
        <br/>
        <strong>Commentaire : </strong><i>{marker.content}</i>
        </span>);
      countResto++;
  });
    if(countResto === 0 && this.state.noRestaus === true){
      alert("Il n'y a pas de restaurant avec ce filtre, merci de sélectionner un autre champ")
    }
    else{
      return mesRestos;
    }
}

handleResto = (event,value) => {
  //Si la valeur est à nul on affiche tous les markers 
  if(value == null){
    this.setState({maCategorie:""})
  }
  //Sinon on affiche la valeur correspondante
  else{
    this.setState({maCategorie:value})
  }
}

handleNote = (event,value) => {
  if(value == null){
    this.setState({maNote:""})
  }
  else{
    this.setState({maNote:value})
  }
}


//Technique permettant d'enlever les doublons du filtres 
//Le parametre tab est le parametre de mesCategories
filterSpeciality = (tab) =>{
    const mesSpeciality = [];
      tab.forEach(element => {
        const found = mesSpeciality.find(specialite => specialite.trim() === element.categorie.trim())
        if(!found){
          mesSpeciality.push(element.categorie.trim());
        }
      });
      return mesSpeciality;
}

render() {
    const mesCategories = this.filterSpeciality(this.state.restos);
    const mesNotes = ['1','2','3','4','5']
    const mesdisplayRestos = this.displayRestos();


    return (
      <>
       <div className="searchMap">
          <p>Sélectionner votre type de restaurant :</p>
            <div className="searchcategorie">
                <Autocomplete
                  id="combo-box-demo"
                  options={mesCategories}
                  getOptionLabel={(option) => option}
                  style={{ width: 200 }}
                  onChange={this.handleResto}
                  renderInput={(params) => <TextField {...params} label="Catégorie" variant="outlined" />}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={mesNotes}
                  getOptionLabel={(option) => option}
                  style={{ width: 80, marginLeft: 50}}
                  onChange={this.handleNote}
                  renderInput={(params) => <TextField {...params} label="Avis" variant="outlined" />}
                />
              </div>
          </div>
      <div className="mapinfo">
        <div>
          <Map
            google={this.props.google}
            zoom={14}
            className="map"
            initialCenter={{ lat: 45.767641, lng: 4.837056}}
          >
            {this.displayMarkers()}

              <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                  <p>{this.state.selectedPlace.adresse}</p>
                  <p>{this.state.selectedPlace.categorie}</p>
                </div>
              </InfoWindow>
          </Map>
        </div>
            <div className="informations">
              <div className="scroolinfo">
                  {mesdisplayRestos}
              </div>
            </div>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDByJ2WFkNtb8zga39FTrI1GF0zmVoXGLE'
})(MapContainer);
import React  from 'react'


const Contact = () =>  {
        return (
            <div className="contact">
                <div className="form">
                    <h2>Contactez nous</h2>
                    <div className="separateur2"></div>
                    <br/>
                    <p>N'hésitez pas à nous contacter pour tout renseignement</p>
                    <div className="champcontact">
                        <h4>Notre adresse :</h4>
                        <p>21 rue eugène Pons</p>
                        <p>Lyon 69000</p>
                    </div>
                    <br/>
                    <div className="champcontact">
                        <h4>Notre e-mail :</h4>
                        <p>bienmangeralyon@lyon.fr</p>
                    </div>
                    <br/>
                    <div className="champcontact">
                        <h4>Notre téléphone : </h4>
                        <p>05.78.54.58.52</p>
                    </div>

                </div>
            </div>
        )
}

export default Contact

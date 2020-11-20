import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

const Footer = () => {
    return (
        <div class="row" style={{ bottom: '0', width: '100%', position: 'absolute', height: '200px', display: 'flex', justifyContent: 'center'}}>
            <div class="col-6 col-md-4">
                <h4>About Us</h4>
                <p>Three peaceful Wilders aiming to make XIV century Europe a better place by providing priceless tips on agriculture and weather so farmers can grow their crops, fruits and vegetables with great efficiency.</p>
            </div>
            <div class="col-6 col-md-4">
                <h4>Contacts</h4>
                <p>Send us your best Carrier &#x1F426; <br />&#x2694;<a href=''>WCS Castle LX</a>&#x1F6E1;<br /> 
                &#x2691;<a href=''>Utrecht Fortress</a>&#x2691;</p>
                </div>
            <div class="col-6 col-md-4">
                <h4>Social Media</h4>

                </div>
            <div class="row">
            <div class="col">
            1 of 3
            </div>
            <div class="col-md-auto">
            Variable width content
            </div>
            <div class="col col-lg-2">
            3 of 3
            </div>
            </div>
        </div>
    )
}

export default Footer

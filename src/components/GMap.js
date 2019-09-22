import GoogleMap from 'google-map-react'
import React,  {Component} from 'react'
import googleApiKey from '../constants/googleApiKey'
import '../assets/styles/Map.css'



class GMap extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
     }
    
    render() {
        var the_center = [25.7574, -80.3733]
        return (  
        <div style= {{height: '100%', width: '100%'}}>
            <GoogleMap
            apiKey = {googleApiKey}
            defaultZoom = {10}
            defaultCenter = {the_center}
            yesIWantToUseGoogleMapApiInternals
            >

            </GoogleMap>
        </div>
        )
    }


};

export default GMap;

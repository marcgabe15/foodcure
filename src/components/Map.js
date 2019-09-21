import GoogleMap from 'google-map-react'
import {React, Component} from 'react'
import googleApiKey from '../constants/googleApiKey'
import './Map.css'



class Map extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
     }
    
    render() {
        var the_center = [34.0522, -118.2437]
        return (  
        <div style= {{height: 'calc(100vh - 71.83px)', width: '100%'}}>
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

export default Map;

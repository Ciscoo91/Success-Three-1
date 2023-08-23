import { GoogleMap, Marker } from "@react-google-maps/api"


const containerStyle = {
  width: '100%',
  height: '400px'
};


export default function Map({center}) {
  return (
    <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={15}
    >
    <Marker position={center} />
    <></>
    </GoogleMap>
  )
}

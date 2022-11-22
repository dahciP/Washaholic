import React, { useState } from "react";
import Hero from "../components/home/Hero";
import Process from "../components/home/Process";
import Work from "../components/home/Work";
import Reasons from "../components/home/Reasons";
import Feedback from "../components/home/Feedback";
import Footer from "../components/footer/Footer";
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl, Popup, FullscreenControl, GeolocateControl, } from "react-map-gl";




const Home = () => {
	document.title = "Washaholic";
	const [lng, setLng] = useState(72.93);
	const [lat, setLat] = useState(19.14);
	const [lng1, setLng1] = useState(72.86);
	const [lat1, setLat1] = useState(19.11);
	const [lng2, setLng2] = useState(72.94);
	const [lat2, setLat2] = useState(19.17);
	const [lng3, setLng3] = useState(72.9082);
	const [lat3, setLat3] = useState(19.085);
	const [showPopup, setShowPopup] = React.useState(true);

	return (
		<div className="text-gray-800">
			<Hero />
			<Process />
			<Work />
			<Reasons />
			<Feedback />
			<Map
			mapboxAccessToken="pk.eyJ1Ijoicm9zaGFuY3MyMyIsImEiOiJjbGFtbTZ1c3QwaDFlM3F0YTU1dzMzcDlmIn0.2dI9iH3I8Ubjz6FxhWCayw"
			style={{
					width: "1800px",
					height: "700px",
					padding: "100px",
					borderRadius: "15px",
					border: "2px solid blue",
					position : "relative",
					left : "60px",
					right : "60px",
					bottom : "50px",
					
			}}
			initialViewState={{
				longitude: "72.93",
				latitude : "19.14",
				zoom : 9
			}}
			
			
			mapStyle="mapbox://styles/mapbox/streets-v9"
			>
				<Marker longitude={lng} latitude={lat}/>
				<Marker longitude={lng1} latitude={lat1}/>
				<Marker longitude={lng2} latitude={lat2}/>
				<Marker longitude={lng3} latitude={lat3}/>
				<NavigationControl position="bottom-right" />
				<FullscreenControl />
				<GeolocateControl />
				{showPopup && (
				<Popup longitude={lng} latitude={lat}
					anchor = "bottom"
					offset = "12020"
					borderRadius = "25%"
					maxWidth="300px"
					closeButton = "false"
					closeOnMove = "true"
					on
					onHover = {() => setShowPopup (false)}>
						<img src="https://res.cloudinary.com/dj1tfaplp/image/upload/v1669097575/Washaholic/laundromat1_kmdm48.webp" alt="Store no 1">
							</img>
							</Popup>)}
				
				<Marker longitude={lng1} latitude={lat1}/>
				<Marker longitude={lng2} latitude={lat2}/>
				<Marker longitude={lng3} latitude={lat3}/>
			</Map>


			<Footer />
		</div>
	);
};

export default Home;

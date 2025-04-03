// import React, { useState, useEffect } from 'react';
// import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../App.css';

// function Reservation(props) {
//   //const { email } = useParams();
//   const [showingInfoWindow, setShowingInfoWindow] = useState(false);
//   const [activeMarker, setActiveMarker] = useState({});
//   const [selectedPlace, setSelectedPlace] = useState({});
//   const [mapCenter] = useState({ lat: 6.7231, lng: 79.9718, zoom: 9.5 });
//   const [places, setPlaces] = useState([]);
//   const [query, setQuery] = useState('');
//   const [checkInTime, setCheckInTime] = useState('');
//   const [checkOutTime, setCheckOutTime] = useState('');
//   const [location, setLocation] = useState(''); // State for location input
//   const [currentPage, setCurrentPage] = useState(1);
//   const [placesPerPage] = useState(5); // Number of places per page

//   useEffect(() => {
//     axios
//       .get('http://localhost:8070/Parking/parking')
//       .then((response) => {
//         setPlaces(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching parking places:', error);
//       });
//   }, []);

//   const onMapClick = (mapProps, map, e) => {
//     setShowingInfoWindow(false);
//     setActiveMarker(null);
//   };

//   const onMarkerClick = (props, marker, e) => {
//     setSelectedPlace(props);
//     setActiveMarker(marker);
//     setShowingInfoWindow(true);
//   };

//   const handleMapReady = (mapProps, map) => {
//     // Handle map ready event
//     // You can use 'map' here if needed
//   };

//   const handleCheckInTimeChange = (event) => {
//     setCheckInTime(event.target.value);
//   };

//   const handleCheckOutTimeChange = (event) => {
//     setCheckOutTime(event.target.value);
//   };

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleFindSpot = () => {
//     // Filter parking places by location (name) inputted
//     const filteredPlaces = places.filter((place) =>
//       place.name.toLowerCase().includes(location.toLowerCase())
//     );

//     // Set the filtered places in the state
//     setPlaces(filteredPlaces);
//   };

//   const mapStyles = {
//     width: '500px',
//     height: '400px',
//   };

//   const mapContainerStyle = {
//     padding: '20px',
//     margin: '0px 10px 0px 0px',
//   };

//   return (
//     <div>
//       <div>
//         <div style={mapContainerStyle}>
//           <Map
//             google={props.google}
//             initialCenter={mapCenter}
//             zoom={mapCenter.zoom}
//             onReady={handleMapReady}
//             style={{ mapStyles, width: '1480px', height: '600px' }}
//           >
//             {places.map((place, index) => (
//               <Marker
//                 key={index}
//                 name={place.name}
//                 position={{ lat: place.latitude, lng: place.longitude }}
//                 onClick={onMarkerClick}
//               />
//             ))}
//             <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
//               <div>
//                 <h3>{selectedPlace.name}</h3>
//               </div>
//             </InfoWindow>
//           </Map>
//         </div>
//       </div>

//       <div style={{ display: 'flex' }}>
//         <div>
//           <div style={{ margin: '700px 0px 0px 100px' }}>
//             <label>Store:</label>
//             <input type="text" value={location} onChange={handleLocationChange} className="form-control" />
//           </div>
//           <div style={{ margin: '10px 0px 0px 100px' }}>
//             <button onClick={handleFindSpot} className="btn btn-primary">
//               Find Spot
//             </button>
//           </div>
//         </div>

         
        
//       </div>
//     </div>
//   );
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyB_r1LftMIeZyWlPoruJcQFQN4NYd-DgUk',
// })(Reservation);











// //import { Link, useNavigate } from 'react-router-dom';
// // import { Button } from 'antd';
// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faSearch } from '@fortawesome/free-solid-svg-icons';

// // function Branches() {
// //   const navigate = useNavigate(); // Get the history object

// //   const bookNow = () => {
// //     // Redirect to the "/reservation" page when the button is clicked
// //     navigate('/reservation');
// //   };

// //   const linkStyle = {
// //     margin: '20px',
// //     marginTop: '50px',
// //     textDecoration: 'none',
// //     fontWeight: 'bold',
// //     fontSize: '20px',
// //     color: 'inherit',
// //   };

// //   const headerStyle = {
// //     height: '100px',
// //     background: 'linear-gradient(to bottom, #0074d9, white)',
// //     borderRadius: '20% 20% 0 0',
// //   };

// //   const imageStyle = {
// //     width: '100%',
// //     height: 'auto',
// //     marginTop: '10px',
// //   };

// //   const book_now = {
// //     margin: '20px',
// //     marginRight: '50px',
// //     marginTop: '10px',
// //     textDecoration: 'none',
// //     fontWeight: 'bold',
// //     fontSize: '20px',
// //     color: 'inherit',
// //     float: 'right',
// //     paddingBottom: '35px',
// //   };

// //   const titleStyle = {
// //     fontSize: '40px',
// //     fontWeight: 'bold',
// //     fontStyle: 'italic',
// //     marginBottom: '20px',
// //     textAlign: 'left',
// //   };

// //   const searchBoxStyle = {
// //     display: 'flex',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'gray',
// //     width: '250px',
// //     height: '20px',
// //     borderRadius: '10px',
// //     padding: '10px',
// //   };

// //   const searchIconStyle = {
// //     fontSize: '24px',
// //     paddingRight: '10px',
// //   };

// //   const inputStyle = {
// //     border: 'none',
// //     outline: 'none',
// //     width: '100%',
// //     height: '100%',
// //     fontSize: '16px',
// //   };

// //   return (
// //     <div>
// //       {/* Blue Area at the Top */}
// //       <header style={headerStyle}>
// //         <div className="container">
// //           <Link to="/" className="navbar-item" style={linkStyle}>
// //             Home
// //           </Link>
// //           <Link to="/about" className="navbar-item" style={linkStyle}>
// //             About Us
// //           </Link>
// //           <Link to="/services" className="navbar-item" style={linkStyle}>
// //             Services
// //           </Link>
// //           <Link to="/branches" className="navbar-item" style={linkStyle}>
// //             Branches
// //           </Link>
// //           <Link to="/packages" className="navbar-item" style={linkStyle}>
// //             Packages
// //           </Link>
// //           <Link to="/contact" className="navbar-item" style={linkStyle}>
// //             Contact Us
// //           </Link>
// //           <Button type="primary" danger style={book_now} onClick={bookNow}>
// //             BOOK NOW
// //           </Button>
// //         </div>
// //       </header>

// //       {/* Branches Page Content */}
// //       <section className="section">
// //         <div className="container">
// //           <div style={titleStyle}>
// //             {/* First Row */}
// //             <h1>Find a Location Near You</h1>

// //             {/* Second Row */}
// //             <div style={searchBoxStyle}>
// //                 <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
// //                 <input
// //                     type="text"
// //                     placeholder="Search Here"
// //                     style={inputStyle}
// //                 />
// //             </div>

// //             {/* Third Row */}
// //             <div>
// //                 <img src="/images/map.jpg" alt="Oil Change" style={imageStyle} />
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// // export default Branches;
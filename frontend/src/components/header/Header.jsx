import './header.scss'
import Foody from '../../images/Foody.jsx'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function Header() {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [city, setCity] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    useEffect(() => {
        if (position.latitude && position.longitude) {
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.latitude}+${position.longitude}&key=3cae0e54dd89456e92db08f439eff4f1`)
                .then(response => response.json())
                .then(data => setCity(data.results[0].components.city))
                .catch(error => console.log(error));
        }
    }, [position]);

    return (
        <div className='header'>
            <header className="site-header">
                <div className="site-identity">
                    <Link to='/homepage'><Foody height='5rem' width='10rem' className='foody-logo' /></Link>
                </div>
                <form action='GET' className='search-container'>
                    <input className='search' type='text' placeholder='Search in Foody...' name='search' />
                    {/* <button type="submit"><i className="fa fa-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-search search-icon" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></i>
                    </button> */}

                </form>
                <nav className="site-navigation">
                    <ul className="nav">
                        <li><Link to='/homepage'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/restaurants'>Restaurants</Link></li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-geo-alt-fill location-icon" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <li>Now • {city ? city : 'Loading...'}</li>
                        <li><button type='submit' className='signin-btn'><Link to='/signin'>Sign In</Link></button></li>
                        <li><button type='submit' className='login-btn'><Link to='/signup'>Sign Up</Link></button></li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

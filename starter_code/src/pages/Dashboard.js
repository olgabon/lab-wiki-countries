import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json';
import './Dashboard.css';



class Dashboard extends Component {
    render() {
        return (
                <div className="countryList" scroll="yes">
                {countries.map((country, key) => {
                return (
                        <div className="countryListScroll" key={key}>
                            <li><Link to={`/Dashboard/CountryDetail/${country.cca3}`}>
                            <h2>{country.flag}  {country.name.common}</h2> 
                            </Link></li>
                        </div>)
                    })}
                </div>
        )
    }
}


export default Dashboard;

import React from 'react';
import countries from '../countries.json';
import { Link } from "react-router-dom";
import './CountryDetail.css';


const getCountry = (cca3) => {
    let selectedCountry = countries.find(country => {
        return country.cca3 === cca3
    })

    return selectedCountry.name.common
} 


const CountryDetail = (props) => {
    const { params } = props.match
    const CountryInfo = countries.find(country => {
    
    return country.cca3 === params.cca3
    
    })

    return (
        <div className="country-info">
            <h2>{CountryInfo.name.common}</h2>
                    <hr />
                <p>Capital: <span>{CountryInfo.capital[0]}</span></p>
                    <hr />
                <p>Area: <span>{CountryInfo.area} m<sup>2</sup></span></p>
                    <hr />
                <p>Borders: </p>
                
                {(CountryInfo.borders.length >= 1) ? 
                CountryInfo.borders.map((border, index) => {
                
                let borderName = countries.filter((country) => {
                    return  country.cca3 === border
                            })[0].name.common

                    return <li><span><Link to={`/Dashboard/CountryDetail/${border}`}>
                        {getCountry(border)}</Link></span></li>
                
                }) : "No borders detected"}
            
        </div>
    )
}


export default CountryDetail

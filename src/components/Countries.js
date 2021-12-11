import React from 'react'
import {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const path = 'https://restcountries.com/v2/all'

const Countries = () => {

    const [countries, setCountries ] = useState([])

    const fetchCountryData = async() => {
        const res = await fetch(path)
        const countries = await res.json()
        setCountries(countries)
    }

    useEffect(() => {
        fetchCountryData()
    }, [])

    return (
        <>
            <div className="countries">
                <div className="countries-title"><h1 className="item-center">World Countries</h1></div>
                
                <div className="grid">
                    {countries.map((country) => {
                        const {
                            numericCode, 
                            flag,
                            name,
                            capital,
                            region,
                            subregion,
                            population,
                            area,
                            timezones,
                            nativeName
                        } = country

                        return (
                            <article key={numericCode}>
                                <div className="image">
                                    <img src={flag} alt={name} />
                                </div>
                                <div className="text">
                                    <h2>{name}</h2>
                                    <h3>Capital: <span>{capital}</span></h3>
                                    <h3>Regiao: <span>{region}</span></h3>
                                    <h3>Sub-regiao: <span>{subregion}</span></h3>
                                    <h3>Populacao: <span>{population}</span></h3>
                                    <h3>Area: <span>{area} Km<sup>2</sup></span></h3>
                                    <div className="timezones">
                                        <h3>Fuso horario: </h3>
                                        {
                                            timezones.map((timezone) => {
                                                return (
                                                <ul key={timezone}>
                                                    <li>{timezone}</li>
                                                </ul>
                                                )
                                            })
                                        }
                                    </div>
                                    
                                    <h3>Nome nativo: <span>{nativeName}</span></h3>
                                    <Link className="button" to={`/${name}`}><i className="fas fa-eye"></i> View More</Link>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Countries

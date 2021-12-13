import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const Country = () => {
  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const country = await res.json()
        setCountry(country)
    }

    fetchCountryData()
  }, [name])

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
            <i className="fas fa-arrow-left 2x" title="Back home"></i>
        </Link>
        {country.map((c) => {
          const {
            numericCode,
            flags,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            borders,
            timezones
          } = c

          return (
            <article key={numericCode}>
               

                <div className="country-name">
                    <h2>{name.official}</h2>
                </div>

                <div className="country-inner">
                    
                    <div className="flag">
                        <img src={flags.svg} alt={name.common} />
                    </div>

                    <div className="country-details">
                        <div>
                            <h5>Native Name: <span>{nativeName}</span></h5>
                            <h5>Capital: <span>{capital}</span>{" "}</h5>
                            <h5>Region: <span>{region}</span></h5>
                            <h5>Sub Region: <span>{subregion}</span></h5>
                            <h5>Population: <span>{population.toLocaleString()}</span></h5>
                        </div>
                        <div>
                            <h5>Top Level Domain: <span>{tld}</span></h5>
                            {/* <h5>Currencies: 
                                <span>
                                    {
                                        currencies.map((cur) => {
                                            return (
                                                <ul key={cur}>
                                                    <li>{cur}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </span>
                            </h5> */}
                            {/* <h5>Languages: 
                                <span>
                                    {
                                        languages.map((lang) => {
                                            return (
                                                <ul key={lang}>
                                                    <li>{lang}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </span>
                            </h5> */}
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Border Countries: </h3>
                    <div className="borders">
                        {borders ? 
                        borders.map((border) => {
                            return (
                            <ul key={border}>
                                <li>{border}</li>
                            </ul>
                            )
                        })
                        : 
                        <div>
                            <ul>
                                <li>No Border</li>
                            </ul>
                        </div>
                        }
                    </div>
                </div>

                <div>
                    <h3>Timezones: </h3>
                    <div className="borders">
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
                </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Country

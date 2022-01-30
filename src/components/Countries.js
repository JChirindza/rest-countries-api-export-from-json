import React, { Fragment } from "react";
import spinner from "./img/spinner.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const path = "https://restcountries.com/v3.1/all";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCountryData = async () => {
        const res = await fetch(path);
        const countries = await res.json();
        setCountries(countries);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    return (
        <>
            <div className="countries">
                <div className="container">
                    <div className="countries-title">
                        <h1 className="item-center">All World Countries</h1>
                    </div>

                    {!isLoading ? (
                        <div className="grid">
                            {countries.map((country) => {
                                const {
                                    ccn3,
                                    flags,
                                    name,
                                    capital,
                                    region,
                                    subregion,
                                    population,
                                    area,
                                    timezones,
                                    nativeName,
                                } = country;

                                return (
                                    <article key={ccn3}>
                                        <div className="image">
                                            <img
                                                src={flags.svg}
                                                alt={name.common}
                                            />
                                        </div>
                                        <div className="text">
                                            <h2>{name.common}</h2>
                                            <h3>
                                                Capital: <span>{capital}</span>
                                            </h3>
                                            <h3>
                                                Region: <span>{region}</span>
                                            </h3>
                                            <h3>
                                                Subregion:{" "}
                                                <span>{subregion}</span>
                                            </h3>
                                            <h3>
                                                Population:{" "}
                                                <span>{population}</span>
                                            </h3>
                                            <h3>
                                                Area:{" "}
                                                <span>
                                                    {area} Km<sup>2</sup>
                                                </span>
                                            </h3>

                                            <Link
                                                className="button"
                                                to={`country/${name.common}`}
                                            >
                                                <i className="fas fa-eye"></i>{" "}
                                                View More
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </>
    );
};

export default Countries;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import exportFromJSON from "export-from-json";

function download(exportType, data, countryName) {
    const fileName = countryName;
    const fields = [
        "ccn3",
        "flags",
        "name",
        "nativeName",
        "population",
        "region",
        "subregion",
        "capital",
        "tld",
        "currencies",
        "languages",
        "borders",
        "timezones",
    ];

    exportFromJSON({ data, fileName, fields, exportType });
}

const Country = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const fetchCountryData = async () => {
            const res = await fetch(
                `https://restcountries.com/v3.1/name/${name}`
            );
            const country = await res.json();
            setCountry(country);
        };

        fetchCountryData();
    }, [name]);

    return (
        <>
            <section className="country">
                <div>
                    <Link to="/" className="btn btn-back">
                        <i
                            className="fas fa-arrow-left 2x"
                            title="Back home"
                        ></i>
                    </Link>

                    <div className="go-to-downloads">
                        <i className="fas fa-download"></i>
                    </div>
                </div>
                {country.map((c) => {
                    const {
                        ccn3,
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
                        timezones,
                    } = c;

                    return (
                        <article key={ccn3}>
                            <div className="country-name">
                                <h2>{name.official}</h2>
                            </div>

                            <div className="country-inner">
                                <div className="flag">
                                    <img src={flags.svg} alt={name.common} />
                                </div>

                                <div className="country-details">
                                    <div>
                                        <h5>
                                            Native Name:{" "}
                                            <span>
                                                {
                                                    // c["name"].['nativeName'].getByIndex(0).common
                                                }
                                            </span>
                                        </h5>
                                        <h5>
                                            Capital: <span>{capital}</span>{" "}
                                        </h5>
                                        <h5>
                                            Region: <span>{region}</span>
                                        </h5>
                                        <h5>
                                            Sub Region: <span>{subregion}</span>
                                        </h5>
                                        <h5>
                                            Population:{" "}
                                            <span>
                                                {population.toLocaleString()}
                                            </span>
                                        </h5>
                                    </div>
                                    <div>
                                        <h5>
                                            Top Level Domain: <span>{tld}</span>
                                        </h5>
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
                                    {borders ? (
                                        borders.map((border) => {
                                            return (
                                                <ul key={border}>
                                                    <li>{border}</li>
                                                </ul>
                                            );
                                        })
                                    ) : (
                                        <div>
                                            <ul>
                                                <li>No Border</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3>Timezones: </h3>
                                <div className="borders">
                                    {timezones.map((timezone) => {
                                        return (
                                            <ul key={timezone}>
                                                <li>{timezone}</li>
                                            </ul>
                                        );
                                    })}
                                </div>
                            </div>
                            <hr />
                            {/* Downloads */}
                            <div className="downloads" id="downloads">
                                <div className="text">
                                    <h3 className="item-center">
                                        Export/Download files
                                    </h3>
                                    <h4 className="text-muted item-center">
                                        <span> .csv; .xls;.xml;</span>
                                    </h4>
                                </div>

                                <div className="download-btn">
                                    <div className="d-grid justify-content-center">
                                        <h4 className="d-flex justify-content-center">
                                            Export File:
                                        </h4>
                                        <button
                                            onClick={() =>
                                                download("json", c, name.common)
                                            }
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fas fa-download"></i>{" "}
                                            Download JSON file
                                        </button>

                                        <button
                                            onClick={() =>
                                                download("csv", c, name.common)
                                            }
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fas fa-download"></i>{" "}
                                            Download CSV file
                                        </button>
                                        <button
                                            onClick={() =>
                                                download("xls", c, name.common)
                                            }
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fas fa-download"></i>{" "}
                                            Download XLS file(Excel)
                                        </button>
                                        <button
                                            onClick={() =>
                                                download("xml", c, name.common)
                                            }
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fas fa-download"></i>{" "}
                                            Download XML file
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </>
    );
};

export default Country;

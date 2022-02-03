import React, { useEffect } from "react";

const Filter = ({
    searchInput,
    setSearchInput,
    setFiltered,
    setCountries,
    countries,
}) => {
    const regions = [
        {
            name: "Filter by region",
            desc: "All",
        },
        {
            name: "Africa",
            desc: "Africa",
        },
        {
            name: "Americas",
            desc: "Americas",
        },
        {
            name: "Asia",
            desc: "Asia",
        },
        {
            name: "Europe",
            desc: "Europe",
        },
        {
            name: "Oceania",
            desc: "Oceania",
        },
    ];

    // Prevent page reload when submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // Search countries
    const searchCountries = (searchValue) => {
        setSearchInput(searchValue);

        if (searchInput) {
            const filteredCountries = countries.filter((country) =>
                Object.values(country)
                    .join("")
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            );
            setFiltered(filteredCountries);
        } else {
            setFiltered(countries);
        }
    };

    // Filter by region

    const filterRegions = async (region) => {
        var url = `https://restcountries.com/v3.1/region/${region}`;

        if (region === "") {
            url = "https://restcountries.com/v3.1/all";
        }

        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
    };

    useEffect(() => {
        filterRegions();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <form class="filters" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="searchBox"
                    id="searchBox"
                    placeholder="Search..."
                    name="searchBox"
                    autoComplete="off"
                    required
                    onChange={(e) => searchCountries(e.target.value)}
                />
                <button
                    class="clearBtn"
                    type="reset"
                    title="Clear search"
                ></button>

                <div>
                    <select
                        name="selectBox"
                        id="selectBox"
                        className="selectBox"
                        onChange={(e) => filterRegions(e.target.value)}
                        value={regions.name}
                    >
                        <option value="">All continents</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Americas">Americas</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </form>
        </>
    );
};

export default Filter;

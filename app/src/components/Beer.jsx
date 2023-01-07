import React from "react";

function Beer({ beerData, kiskutya }) {
    return (
        <div>
            <p className="beer-name">{beerData.name}</p>
            <p className="beer-tagline">{beerData.tagline}</p>
            <p>{beerData.abv} %</p>
            <p>{kiskutya}</p>   
        </div>
    );
}

export default Beer;
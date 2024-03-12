import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css';

const Countries = () => {
    const [countries, setCountry] = useState([]);
    const [markVisited, setMarkedCountry] = useState([]);
    const [markFlag , setMarkedFlag] = useState([]);
    const [addCountries, SetAddCountry]= useState([]);

    const handleMarkvisited = (markedCountryProps) => {
        const newMarkedCountry = [...markVisited, markedCountryProps];
        setMarkedCountry(newMarkedCountry)
        //console.log('pass success ,  :')
    }
    const handleMarkedFlag = flagProps =>{
        const newMarkedFlag = [...markFlag,flagProps];
        setMarkedFlag(newMarkedFlag);

    }

    const handleTest = (test)=>{
        const newAddCountry = [...addCountries, test];
        SetAddCountry(newAddCountry);
        //console.log('connected')
    }


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            {/* visited country list */}
            <div>
                <h3>visited country : {markVisited.length} (marked) && {markFlag.length} (flag) </h3>
                <ul className="markedCountryStyle">
                    {
                        markVisited.map(visited => <li key={visited.cca3}>{visited.name.common}  </li>)
                    }
                </ul>
                {/* updating flag */}
                <div className="flag_container">
                    {
                        markFlag.map(giveCountry => <img key={giveCountry.cca3} src={giveCountry.flags.png} />)
                    }
                </div>
                {/*add test  */}
                <div>
                    {
                        addCountries.map(add=><li key={add.cca3} >{add.name.official}</li>)
                    }

                </div>
            </div>

            {/* load data */}
            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3} handleMarkvisited={handleMarkvisited}
                        handleMarkedFlag={handleMarkedFlag} handleTest={handleTest}
                         country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
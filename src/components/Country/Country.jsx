import { useState } from 'react';
import './country.css';
const Country = ({ country }) => {
    console.log(country)

    const { name, flags, capital, area } = country;
    const [visited, setvisited] = useState(false)
    const handleVisit = () => {
        setvisited(!visited)
    }
    return (
        <div className="country">

            <h2>Name : {name.common} </h2>
            <p>Official : {name.official} </p>
            <img className='size' src={flags.png} alt={flags.alt}/>
            <div className='bottomSide'>
                <h4>Capital : {capital} </h4>
                <h4>Area : {area}</h4>
            </div>
            <div className='buttonDiv'>
                <button onClick={handleVisit}>{visited ? 'visited' : 'going'}</button>
                <p>{visited ? '  i have visit this county' : 'i want to visit'}</p>
            </div>

        </div>
    );
};

export default Country;
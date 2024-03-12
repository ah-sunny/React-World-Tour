import { useState } from 'react';
import './country.css';


const Country = ({ country,handleMarkedFlag,handleMarkvisited,handleTest }) => {
    // console.log(country)
// console.log(handleMarkvisited)
    const { name, flags, capital, area,cca3 } = country;
    const [visited, setvisited] = useState(false)
    const handleVisit = () => {
        setvisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'visitedStyle':'non'}`}>

            <h2>Name : {name.common} </h2>
            <p>Official : {name.official} </p>
            <img className='size' src={flags.png} alt={flags.alt}/>
            <div className='bottomSide'>
                <h4>Capital : {capital} </h4>
                <h4>Area : {area}</h4>
            </div>
                <h4>Code : {cca3}</h4>
            <div className='bottomSide'>
                <button onClick={()=>handleMarkvisited(country)} >Marked visited</button>
                 <button onClick={()=> handleMarkedFlag(country)}>Add flag</button>
                 <button onClick={()=>handleTest(country)}>add test</button>
            </div>
            <div className='buttonDiv'>
                <button style={{backgroundColor : visited ? '#747bff' : ''}} onClick={handleVisit}>{visited ? 'visited' : 'going'}</button>
                <p>{visited ? '  i have visit this county' : 'i want to visit'}</p>
            </div>

        </div>
    );
};

export default Country;
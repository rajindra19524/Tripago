import { useState } from "react"
import {useFetch} from '../hooks/useFetch'
import './TripList.css'

function TripList() {

    const [url, setUrl] = useState('http://localhost:3000/trips')
    
    const { data:trips } = useFetch(url)
    
   

    return (
        <div className="trip-list">
            <h2>Trip  </h2>
            <ul>
                {trips && trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                   </li> 
                ))}
            </ul>

            <div className="filters">
                <button onClick={()=> setUrl('http://localhost:3000/trips?loc=europe')}>europian trips</button>
                <button onClick={()=> setUrl('http://localhost:3000/trips?loc=america')}>america trips</button>
            </div>
        </div>
    )
}

export default TripList
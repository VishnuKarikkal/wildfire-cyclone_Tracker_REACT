import './App.css';
import Map from './components/Map';
import { useState , useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';

function App() {
const [ eventData , setEventData ] = useState([])
const [ loading , setLoading ] = useState(false)
const [ event , setEvent ] = useState('wildfire')

useEffect(
  ()=>
{
  setLoading(true);
  const fetchEvents = async ()=>
  {
    const res= await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
    const { events } = await res.json();
    setEventData(events);
    setLoading(false);
  }
  fetchEvents();    //fetching events from NASA eonet API
  
},[])

function toggleEvent()
{
  event === 'wildfire' ? setEvent('cyclone') : setEvent('wildfire');
}

  return (
    <div className="App">
     <Header event={event} />
     <button className="btn btn-dark" onClick={toggleEvent} >Switch</button>
     { !loading ? <Map eventData={eventData} event={event} /> : <Loader /> }
     
    </div>
  );
}

export default App;

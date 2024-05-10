import { useState } from 'react';
import './App.css';
import Tours from './Components/Tours';
import data from './data';

function App() {
  const [tours, settours] = useState(data); // Use settours if you need to update the tours list
  const removetour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    settours(newTours);
  };
  function refresh(){

  }

  if(tours.length===0){
    return(
      <div>
        <h4 id='No'>No Plan Left</h4>
      <button id='refresh'onClick={refresh}>Refresh</button>
      </div>
    );
  }
   function refresh(){
    settours(data);
   }
  return (
    
      
      <div id='wrapper'>
        <Tours tours={tours} removetour={removetour}></Tours>
      </div>
    
  );
}

export default App;

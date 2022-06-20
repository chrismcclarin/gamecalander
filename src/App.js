import Calendar from 'react-calendar';
//import Boardgamedetail from './components/boardgamedetail.js';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  
  
  
  
  
  return (
    <div className="App">
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <div>
      
      </div>
    </div>
  );
}

export default App;

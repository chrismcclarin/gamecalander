import Calendar from 'react-calendar';
//import Boardgamedetail from './components/boardgamedetail.js';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import BGList from './components/BGList'
import { Container } from './popupform/Container';

function App() {
  const [date, setDate] = useState(new Date());
  const [bg, setBG ] = useState(null);
  const URL = 'https://bgbackend.herokuapp.com/bg/';

  const getBG = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data)
      setBG(data);
  };

  useEffect(() => {getBG()}, []);

  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  
  
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
        <Container triggerText={triggerText} onSubmit={onSubmit} />
      </div>
      <div>
        <BGList bg={bg} />
      </div>
    </div>
  );
}

export default App;

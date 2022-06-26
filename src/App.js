import Calendar from 'react-calendar';
//import Boardgamedetail from './components/boardgamedetail.js';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import BGList from './components/BGList'
import { Container } from './popupform/Container';

function App() {
  const [date, setDate] = useState(new Date());
  const [bg, setBG] = useState(null);
  const [newbg, setNewBG] = useState({
      Name: "",
      Player1: "",
      Player2: "",
      Player3: "",
      Player4: "",
      Player5: "",
      Player6: "",
      Winner: "",
      url: "",
      Date: date
  });
  const URL = "https://bgbackend.herokuapp.com/bg";

  const getBG = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data)
      setBG(data);
  };

  const createBG = async (bg) => {
    // make post request to create game
    await fetch(URL, {
      method: "POST",
      headers: {
          "Content-Type": "Application/json",
      },
      body: JSON.stringify(bg),
    });
    // update list of bg
    getBG();
  };

  // const updateBG = async (bg, id) => {
  //     await fetch(beURL + id, {
  //         method: 'PUT',
  //         headers: {
  //             'Content-Type': 'Application/json',
  //         },
  //         body: JSON.stringify(bg),
  //     });
  //     getBG();
  // }

  // const deleteBG = async id => {
  //     await fetch(beURL + id, {
  //         method: 'DELETE',
  //     })
  //     getBG();
  // }

  useEffect(() => {getBG()}, []);

  const handleChange = (event) => {
    setNewBG({...newbg, [event.target.id]: event.target.value})
}

  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    createBG(newbg);
    setNewBG({
      Name: "",
      Player1: "",
      Player2: "",
      Player3: "",
      Player4: "",
      Player5: "",
      Player6: "",
      Winner: "",
      url: "",
      Date: date
    })
    console.log(newbg)
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
        <Container 
        triggerText={triggerText} 
        onSubmit={onSubmit}
        handleChange={handleChange}
        />
      </div>
      <div>
        <BGList 
        bg={bg} 
        />
      </div>
    </div>
  );
}

export default App;

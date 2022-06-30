import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import BGList from './components/BGList'
import { Container } from './popupform/Container';
import Boardgamedetail from './components/Boardgamedetail'
import Moment from 'moment'

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
  });
  //const URL = "https://bgbackend.herokuapp.com/bg/";
  const URL = "http://localhost:4000/bg/";

  const getBG = async () => {
      const response = await fetch(URL);
      const data = await response.json();
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

  const updateBG = async (bg, id) => {
      await fetch(URL + id, {
          method: 'PUT',
          headers: {
              'Content-Type': 'Application/json',
          },
          body: JSON.stringify(bg),
      });
      getBG();
  }

  const deleteBG = async (id) => {
      await fetch(URL + id, {
          method: 'DELETE',
      })
      getBG();
  }

  useEffect(() => {getBG()}, []);

  const handleChange = (event) => {
    setNewBG({...newbg, [event.target.id]: event.target.value})
  }

  const triggerText = 'Open form';
  const onSubmit = () => {
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
    })
  };
  
  function changeCalender() {
    setDate(null)
  }

  function Display() {
    const calenderDate = Moment(date).format("MMM Do YYYY")
    const dateComp = bg.filter(p => p.dated === calenderDate)

    function showCalenderComponents() {
      return dateComp.map((boardgame, i) => {
              return (
                <div key={i}>
              <Boardgamedetail 
              show={boardgame}
              updateBG={updateBG}
              deleteBG={deleteBG} 
              setShow={setNewBG}
              />
              </div>
              )})}
    return <div>{(dateComp !== 0) ? showCalenderComponents() : ''}</div>
  }

  
  
  return (
    <div className="App">
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p> */}
      <div>
        <Container 
        triggerText={triggerText} 
        onSubmit={onSubmit}
        handleChange={handleChange}
        date={date}
        setNewBG={setNewBG}
        newbg={newbg}
        />
      </div>
      <div>
        <BGList 
        bg={bg}
        deleteBG={deleteBG}
        updateBG={updateBG}
        date={date}
        setDate={setDate}
        reset={getBG}
        changeCalender={changeCalender}
        />
      </div>
      <div>
      {bg ? Display() : ""}
      </div>
    </div>
  );
}

export default App;

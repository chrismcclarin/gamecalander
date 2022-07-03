import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import './App.css';
import BGList from './components/BGList'
import { Container } from './popupform/Container';
import Boardgamedetail from './components/boardgamedetail'
import Moment from 'moment'

// bootstrap css imports
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function App() {
  const [date, setDate] = useState(new Date());
  const [bg, setBG] = useState(null);
  const [newbg, setNewBG] = useState({
    Name: "",
    Players: [
        {
            Player: "Evan",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Chris",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Kevin",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Eric",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
    ],
    Groupwin: false,
    GameComments: "",
    url: "",
    theme: "",
    dated: ""
  });
  const URL = "https://bgbackend.herokuapp.com/bg/";
  // const URL = "http://localhost:4000/bg/";

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

  const triggerText = 'New Boardgame';

  const onSubmit = () => {
    console.log("1")
    createBG(newbg);
    setNewBG({
      Name: "",
      Players: [
        {
            Player: "Evan",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Chris",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Kevin",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Eric",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
      ],
      Groupwin: false,
      GameComments: "",
      url: "",
      theme: "",
      dated: ""
    })
  };
  
  function changeCalender() {
    setDate(null)
  }

  const [show, setShow] = useState(null)

  function showComponent (event) {
      event.preventDefault();
      const id = bg.find(ele => ele._id === event.target.value)
      setShow(id)
      changeCalender()
  }

  const detailLoaded = () => {
    return ( 
          <Boardgamedetail 
          show={show}
          updateBG={updateBG}
          deleteBG={deleteBG}
          setShow={setShow}
          bg={bg}
          setDate={setDate}
          date={date}
          />
    )
  }

  function Display() {
    const calenderDate = Moment(date).format("MMM Do YYYY")
    const dateComp = bg.filter(p => Moment(new Date(p.dated)).format("MMM Do YYYY") === calenderDate)

    function showCalenderComponents() {
      return dateComp.map((boardgame, i) => {
        return (
          <div key={i}>
            <Boardgamedetail 
            show={boardgame}
            updateBG={updateBG}
            deleteBG={deleteBG} 
            bg={bg}
            setDate={setDate}
            date={date}
            setShow={setShow}
            />
          </div>
        )})}
    return ((dateComp !== 0) ? showCalenderComponents() : '')
  }

  
  
  return (
    <div className="App">
      <h1 className='App-header'>Periodic Tabletop</h1>
        <Row>
          <Col sm={8}>
            <div className='calendar-container'>
              <div className='calendar-cushion'>
              <Calendar onChange={setDate} value={date} />
              </div>
            </div>
            <div sm={8} className="d-grid gap-2">
              {bg ? Display() : ""}
              {show ? (date ? "" : detailLoaded()) : ""} 
            </div>
          </Col>
          <Col sm={3}  >
            <div className="newBGbutton">
              <Container 
              triggerText={triggerText} 
              onSubmit={onSubmit}
              handleChange={handleChange}
              date={date}
              setNewBG={setNewBG}
              newbg={newbg}
              />
            </div>
            <div className="BGList d-grid gap-2">
              <BGList 
              bg={bg}
              showComponent={showComponent}
              />
            </div>
          </Col>
        </Row>
    </div>
  );
}

export default App;

//suggestions box

//Card stuff:
//possible add comment section to talk about our opinions of the game.(hot takes)

//BGList stuff:
//search by winner, player, who picked


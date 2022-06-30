import Container from '../popupform/Container/updateindex.js';
import { useState } from 'react';

function Boardgamedetail({show, updateBG, deleteBG, setShow}) {
    const [editShow, setEditShow] = useState(show)

    const removebg = () => {
        deleteBG(show._id);
        setShow()
    }
    const changebg = () => {
        updateBG(editShow, show._id);
        setShow()
    }

    const updateChange = (event) => {
        setEditShow({...editShow, [event.target.id]: event.target.value})
    }
    const triggerText = 'Update';

    return (
        
        <div>
            <div>
                <Container 
                triggerText={triggerText} 
                onSubmit={changebg}
                handleChange={updateChange}
                show={show}
                />
            </div>
            <button onClick={removebg} id="delete">Delete</button>
            <h1>{show.Name}</h1>
            <h2>{show.Player1}</h2>
            <h2>{show.Player2}</h2>
            <h2>{show.Player3}</h2>
            <h2>{show.Player4}</h2>
            <h2>{show.Player5}</h2>
            <h2>{show.Player6}</h2>
            <h3>{show.Winner}</h3>
            <p>{show.url}</p>
            <p>{show.dated}</p>
        </div>
    )
}

export default Boardgamedetail;
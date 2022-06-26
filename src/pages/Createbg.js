
import { useState } from 'react';
import { Link } from 'react-router-dom'



function CreateBG(props) {
<div className='CreateBG'></div>

// useState to hold the form data

const [ newForm, setNewForm ] = useState({
    BoardgameName: "",
    PlayerName: "",
    Score: "",
    url: "",
});

// handleChange function for form
const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
};

// handleSubmit function for form
const handleSubmit = (event) => {
    event.preventDefault();
    props.createUnits(newForm);
    setNewForm({
        BoardgameName: "",
        PlayerName: "",
        Score: "",
        url: "",
    
    });
};
const loaded = () => {
    return props.units.map(unit => (
        <div key={unit._id} className="unit">
            <Link to={`/units/${unit._id}`}><h1>{unit.Name}</h1></Link>
        
        </div>
    ));
};

const loading = () => {
    return <h1>Loading...</h1>;
};


return (
    <section>
    <form onSubmit={handleSubmit} id = 'create-BG-form'>
        <input
            type="text"
            value={newForm.BoardgameName}
            name="BoardgameName"
            placeholder="BoardgameName"
            onChange={handleChange}
        />
        <br/>
        <input
            type="text"
            value={newForm.PlayerName}
            name="PlayerName"
            placeholder="PlayerName"
            onChange={handleChange}
        />
        <br/>
        <input
            type="text"
            value={newForm.Score}
            name="Score"
            placeholder="Score"
            onChange={handleChange}
        />
        <br/>
        <input
            type="text"
            value={newForm.url}
            name="url"
            placeholder="url"
            onChange={handleChange}
        />
        <br/>
        <input id = 'create-BG-submit' type="submit" value="Create BG" />
    </form>
    <div id = "boardgames">
    {props.units ? loaded() : loading()}
    </div>
    </section>
);
}

export default CreateBG;
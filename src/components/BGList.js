import Boardgamedetail from './Boardgamedetail'
import { useState } from 'react';

function BGList(props) {
    const [show, setShow] = useState(null)

    function showComponent (event) {
        event.preventDefault();
        setShow(props.bg[event.target.value])
        props.changeCalender()
    }
    const loaded = () => {
            return props.bg.map((bg, i) => {
                return (<div key={bg._id}>
                <button value={i} onClick={showComponent}>{bg.Name}</button> 
                </div>
                )
            })
    }

    const detailLoaded = () => {
        return (
            <div>
            <Boardgamedetail 
            show={show}
            updateBG={props.updateBG}
            deleteBG={props.deleteBG}
            setShow={setShow}
            date={props.date}
            setNewBG={props.setNewBG}
            newbg={props.newbg}
            />
            </div>)

    }

    const loading = () => {
        return <h1>Loading...</h1>;
    };  


    return (
        <div>
            <div>
                {props.bg ? loaded() : loading()}
            </div>
            <div>
                {show ? (props.date ? "" : detailLoaded()) : ""} 
            </div>
        </div>
)
}

export default BGList;
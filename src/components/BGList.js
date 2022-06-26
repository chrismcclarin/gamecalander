import Boardgamedetail from './Boardgamedetail'
import { useState } from 'react';

function BGList(props) {
    const [show, setShow] = useState(null)

    function showComponent(event) {
        event.preventDefault();
        setShow(props.bg[event.target.value])
    }
    const loaded = () => {
            return props.bg.map((bg, i) => {
                return (<div>
                <button value={i} onClick={showComponent} key={i}>{bg.Name}</button>
                </div>)
            })
    }

    const detailLoaded = () => {
        return (
            <Boardgamedetail 
            show={show}
            updateBG={props.updateBG}
            deleteBG={props.deleteBG}
            />)
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
                {show ? detailLoaded() : ''} 
            </div>
        </div>
)
}

export default BGList;
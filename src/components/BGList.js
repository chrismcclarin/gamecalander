import Boardgamedetail from './Boardgamedetail'
import { useState } from 'react';

function BGList(props) {
    const [show, setShow] = useState(null)


    function showComponent(event) {
        event.preventDefault();
        setShow(props.bg[event.target.value])
        props.setDate(null)
    }
    const loaded = () => {
            return props.bg.map((bg) => {
                return (<div key={bg._id}>
                <button onClick={showComponent}>{bg.Name}</button> 
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
                {props.date ? "" : detailLoaded()} 
            </div>
        </div>
)
}

export default BGList;
import Search from './Search'
import SortedList from './SortedList'
import { useState } from 'react';

function BGList(props) {
    const [assorted, setAssorted] = useState(null);
    const [URLorg, setURLorg] = useState('sort/');
    const [listData, setlistData] = useState(null);


    const getsortedBG = async () => {
        const response = await fetch(props.URL+URLorg);
        const data = await response.json();
        setlistData(data);
    };

    const loaded = () => {

        const searchBG = (arr, optiona, optionb) => {
            if (optiona === 'Played') {
                setURLorg('mostcount/')
                return listData
            }
            if (optiona === null || optionb === null) {
                return null
            } 
            
            if (optiona === "" || optionb === "") {
                return null
            }

            if (optiona && optionb) {
                setURLorg(`${optiona}/${optionb}`)
                return listData
            }
    }

    // <option value="Winner">Winner</option>
    // <option value="Player">Player</option>
    // <option value="Picked">Who Picked</option>
    // <option value="Played">Most Played</option>
    // <option value="theme">Theme</option>
    return (
                <div>
                    <Search bg={uniqBy} searchBG={searchBG} setAssorted={setAssorted} />
                    {[assorted === null ? <SortedList uniqBy={uniqBy} showComponent={props.showComponent} /> : <SortedList uniqBy={assorted} showComponent={props.showComponent} />]}
                </div>
            )
    }


    const loading = () => {
        return <h1>Loading...</h1>;
    };  


    return (props.bg ? loaded() : loading())

}

export default BGList;
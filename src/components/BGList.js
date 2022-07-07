import Search from './Search'
import SortedList from './SortedList'
import { useState } from 'react';

function BGList(props) {
    const [assorted, setAssorted] = useState(null);

    const loaded = () => {
        const uniqBy = props.bg.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.Name === value.Name
            )) 
        )
        const searchBG = (arr, optiona, optionb) => {
            if (optiona === null || optionb === null) {
                return null
            } 
            return arr.filter((obj1) => {
                const one = obj1.Players.filter((obj2) => {
                    return obj2['Player'] === optionb
                })
                if (typeof(obj1[optiona]) === 'string') {
                    return obj1[optiona] === optionb
                }
                if (one.length !== 0) {
                    if (typeof(one[0][optiona]) === 'string') {
                        return one[0][optiona] === optionb
                    }
                    return one[0][optiona] === true
                }
                return null
                
            })
    }
            return (
                <div>
                    <Search bg={uniqBy} searchBG={searchBG} setAssorted={setAssorted} />
                    {[assorted === null ? <SortedList uniqBy={uniqBy} /> : <SortedList uniqBy={assorted} />]}
                </div>
            )
    }


    const loading = () => {
        return <h1>Loading...</h1>;
    };  


    return (props.bg ? loaded() : loading())

}

export default BGList;
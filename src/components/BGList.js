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
            const convert = (arr) => {
                const res = {};
                arr.forEach((obj) => {
                    const key = `${obj.Name}`;
                    if (!res[key]) {
                        res[key] = {...obj, count: 0 };
                    };
                    res[key].count += 1;
                });
            return Object.values(res);
            };

            const mostPlayed = convert(props.bg)
            if (optiona === 'Played') {
                return mostPlayed
            }

            if (optiona === null || optionb === null) {
                return null
            } 
            
            if (optiona === "" || optionb === "") {
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
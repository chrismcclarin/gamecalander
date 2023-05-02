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
        //creates a couting system.
        const searchBG = (arr, optiona, optionb) => {
            const convert = (arr) => {
                //creates a new object res
                const res = {};
                //for each object in the array(in this case games played), we make a key out of the object's name.
                arr.forEach((obj) => {
                    const key = `${obj.Name}`;
                    //if that name isn't in the res object, then it gets added,
                    if (!res[key]) {
                        res[key] = {...obj, count: 0 };
                    };
                    //then we add 1 to res object that fits the name of the board game.
                    res[key].count += 1;
                });
            //this returns all the values, so we have a list of how many times we have played each boardgame, that can be matched to the boardgames.
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
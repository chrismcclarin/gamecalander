import { useState } from 'react';
import { nanoid } from 'nanoid'

function Search(props) {
    const [optionA, setOptionA] = useState(null);
    const [optionB, setOptionB] = useState(null);
        //const sortUniqBy = uniqBy.sort((a, b) => a.Name.localeCompare(b.Name))
        const search = (arr, optiona, optionb) => {
            if (optiona === null || optionb === null) {
                return null
            } 
            // console.log(optionb)
            // console.log(arr)
            // setOptionA(optiona)
            // setOptionB(optionb)
            return arr.filter((obj1) => {
                const one = obj1.Players.filter((obj2) => {
                    return obj2['Player'] === optionb
                })
                if (typeof(obj1[optiona]) === 'string') {
                    return obj1[optiona] === optionb
                } else {
                    return one[0][optiona] === true
            }
            });
        };

        function nameList() {
            const list = []
            props.bg.forEach(e => {
                e.Players.forEach(e => {
                    if (e.Player !== "")
                        list.push(e.Player)
                })
            }) 
            const uniqBy = list.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t === value
            ))) 
            return uniqBy
        }
        console.log(nameList())
        // useEffect(() => {search()}, [])
        const test = search(props.bg, optionA, optionB)
        //const test2 = search(props.bg, 'theme', '')
        // console.log(test)
        // console.log(test2)
    // useEffect(() => console.log(test), [])
    // useEffect(() => console.log(test2), [])

        function chooseSearch(e) {
            setOptionB(e.target.value)
            console.log(optionB)
        }
// console.log(optionA)
// console.log(optionB)


return (<div>
                        <label htmlFor="sort">Sort By:</label>
                        <select onChange={(e) => {
                            e.preventDefault(e)
                            setOptionA(e.target.value)}}> 
                            <option value="null">- -</option>
                            <option value="Winner">Winner</option>
                            <option value="Player">Player</option>
                            <option value="Picked">Who Picked</option>
                            {/* <option value="Most Played">Most PLayed</option> */}
                            <option value="theme">Theme</option>
                        </select>
                        {/* If winner/player/who picked is chosen, map a list of all players */}
                        <select onChange={(e) => {
                            setOptionB(e.target.value)
                                        }}
                            id="player" name="Bglist">
                        <option value="null">- -</option>
                        {nameList().map(name => {
                            return (<option key={nanoid()} value={name}>{name}</option>
                        )})}
                        </select>
                        {/* If theme is chosen, map a list of all themes */}
                        <select id="player" name="Bglist">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                        </select>
                        {/* if most played, sort in ascending order of most played games */}
            </div>)





}

export default Search;

//search by winner, player, who picked, most played, theme
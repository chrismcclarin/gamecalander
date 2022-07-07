import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

function Search({bg, searchBG, setAssorted}) {
    const [optionA, setOptionA] = useState(null);
    const [optionB, setOptionB] = useState(null);
    const [playerDrop, setPlayerDrop] = useState(null);
    const [themeDrop, setThemeDrop] = useState(null);

        function nameList() {
            const list = []
            bg.forEach(e => {
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

        function themeList() {
            const list = []
            bg.forEach(e => {
                if (e.theme !== "")
                    list.push(e.theme)
            })

            const uniqBy = list.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t === value
            ))) 
            return uniqBy
        }

        function Optionslisted() {
            if (optionA === "theme") {
                return (<select onChange={(e) => {
                    e.preventDefault(e)
                    handleChangeTheme(e)
                }}
                    id="player" value={themeDrop} name="Bglist">
                    <option value="null">- -</option>
                    {themeList().map(theme => {
                        return (<option key={nanoid()} value={theme}>{theme}</option>
                    )})}
                </select>)
            }
            if (optionA === "Winner" || optionA === "Player" || optionA === "Picked") {
                return (<select onChange={(e) => {
                    e.preventDefault(e)
                    handleChangePlayer(e)
                }}
                    id="player" value={playerDrop} name="Bglist">
                    <option value="null">- -</option>
                    {nameList().map(name => {
                        return (<option key={nanoid()} value={name}>{name}</option>
                    )})}
                </select>)
            }
        }
        const test = (searchBG(bg, optionA, optionB))

        useEffect(() => setAssorted(test), [optionA, optionB])

        function handleChangePlayer(e) {
            setOptionB(e.target.value)
            setPlayerDrop(e.target.value)
        }
        function handleChangeTheme(e) {
            setOptionB(e.target.value)
            setThemeDrop(e.target.value)
        }


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
                        {Optionslisted()}
                        {/* if most played, sort in ascending order of most played games */}
            </div>)





}

export default Search;

//search by winner, player, who picked, most played, theme
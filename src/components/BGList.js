import Button from 'react-bootstrap/Button'
import Search from './Search'

function BGList(props) {
    const loaded = () => {
        const uniqBy = props.bg.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.Name === value.Name
            )) 
        )

        const sortUniqBy = uniqBy.sort((a, b) => a.Name.localeCompare(b.Name))


        // onChange={(e) => {
        //     console.log(convert(uniqBy, e.target.value, e.target.value))}}
        //     id="type" 
        //     name="Bglist">

            return (
                //consider using state for optiona, and state for option
                <div>
                    <div>
                        <label htmlFor="sort">Sort By:</label>
                        <select> 
                            <option value="Winner">Winner</option>





                            <option value="Player">Player</option>
                            <option value="Who Picked">Who Picked</option>
                            <option value="Most Played">Most PLayed</option>
                            <option value="theme">Theme</option>
                        </select>
                        {/* If winner/player/who picked is chosen, map a list of all players */}
                        <select id="player" name="Bglist">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                        </select>
                        {/* If theme is chosen, map a list of all themes */}
                        <select id="player" name="Bglist">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                        </select>
                        {/* if most played, sort in ascending order of most played games */}

                    </div>
                    <Search bg={props.bg}/>
                    {sortUniqBy.map((boardgame) => {
                        return (<div key={boardgame._id} className="d-grid">
                        <Button variant="secondary" value={boardgame._id} onClick={props.showComponent}>{boardgame.Name}</Button>{' '}
                        </div>
                        )})}
                </div>
            )
    }


    const loading = () => {
        return <h1>Loading...</h1>;
    };  


    return (props.bg ? loaded() : loading())

}

export default BGList;
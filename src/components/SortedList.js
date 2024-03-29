import Button from 'react-bootstrap/Button'
import { nanoid } from 'nanoid'
import Stack from 'react-bootstrap/Stack';

function SortedList(props) {
    const loaded = () => {
        const sortUniqBy = props.uniqBy.sort((a, b) => a.Name.localeCompare(b.Name))
        if (props.uniqBy[0]?.count !== undefined) {
            const orderPlayed = props.uniqBy.sort((a, b) => {return b.count - a.count})
            return (
                <Stack className="BGList gap-2">
                    {orderPlayed.map((boardgame) => {
                        return (
                        <div key={nanoid()} className="d-grid">
                            <Button variant="secondary" className="listing" value={boardgame._id} onClick={props.showComponent}>
                                {boardgame.Name}
                                <span>x{boardgame.count}</span>
                            </Button>
                        </div>
                        )})}
                </Stack>
            )
        }
            return (

                <Stack className="BGList gap-2">
                    {sortUniqBy.map((boardgame) => {
                        return (
                        <div key={nanoid()} className="d-grid">
                            <Button variant="secondary" value={boardgame._id} onClick={props.showComponent}>{boardgame.Name}</Button>{' '}
                        </div>
                        )})}
                </Stack>
            )
    }
    const loading = () => {
        return <h1>Loading...</h1>;
    };  


    return (props.uniqBy ? loaded() : loading())

}

export default SortedList;
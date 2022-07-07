import Button from 'react-bootstrap/Button'
import { nanoid } from 'nanoid'

function SortedList(props) {
    const loaded = () => {
        const sortUniqBy = props.uniqBy.sort((a, b) => a.Name.localeCompare(b.Name))

            return (
                <div>
                    {sortUniqBy.map((boardgame) => {
                        return (
                        <div key={nanoid()} className="d-grid">
                            <Button variant="secondary" value={boardgame._id} onClick={props.showComponent}>{boardgame.Name}</Button>{' '}
                        </div>
                        )})}
                </div>
            )
    }
    const loading = () => {
        return <h1>Loading...</h1>;
    };  


    return (props.uniqBy ? loaded() : loading())

}

export default SortedList;
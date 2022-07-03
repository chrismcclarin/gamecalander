import Button from 'react-bootstrap/Button'

function BGList(props) {

    const loaded = () => {
        const uniqBy = props.bg.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.Name === value.Name
            ))
        )

        const sortUniqBy = uniqBy.sort((a, b) => a.Name.localeCompare(b.Name))

            return sortUniqBy.map((boardgame, i) => {
                return (<div key={boardgame._id} className="d-grid">
                <Button variant="secondary" value={boardgame._id} onClick={props.showComponent}>{boardgame.Name}</Button>{' '}
                </div>
                )
            })
    }


    const loading = () => {
        return <h1>Loading...</h1>;
    };  


    return (props.bg ? loaded() : loading())

}

export default BGList;
function Boardgamedetail(props) {
    return (
        <div>
            <h1>{props.show.Name}</h1>
            <h2>{props.show.Players}</h2>
            <h3>{props.show.Score}</h3>
        </div>
    )
}

export default Boardgamedetail;
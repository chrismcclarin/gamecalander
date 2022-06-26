function Boardgamedetail(props) {
    // const removebg = () => {
    //     props.deleteBG(props.show._id);
    // }

    return (
        <div>
            <button id="delete">Delete</button>
            <h1>{props.show.Name}</h1>
            <h2>{props.show.Players}</h2>
            <h3>{props.show.Winner}</h3>
            <p>{props.show.url}</p>
            <p>{props.show.date}</p>
        </div>
    )
}

export default Boardgamedetail;
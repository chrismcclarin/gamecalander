import Container from '../popupform/Container/updateindex.js';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import Moment from 'moment'
import { nanoid } from 'nanoid'

function Boardgamedetail({show, updateBG, deleteBG, setShow, bg, setDate, date}) {
    const [editShow, setEditShow] = useState(show)


    const removebg = () => {
        deleteBG(show._id);
        setShow()
    }

    const changebg = () => {
        updateBG(editShow, show._id);
        setShow()
    }

    const updateChange = (event) => {
        setEditShow({...editShow, [event.target.id]: event.target.value})
    }
    const triggerText = 'Update';

    function showSVGCheck(index) {
        let checks = [show.Players[index].New, show.Players[index].Picked]
        return checks.map((data) => {
        if (data === false) {
            return (
                <Col key={nanoid()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
                </Col>
            )} else {
                return (
                    <Col key={nanoid()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    </Col>
                )
            }
        })
    }

    function winorGroupWin(index) {
        if (show.Groupwin === true) {
            return (
                <Col>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </Col>
            )
        } else if (show.Players[index].Winner === true) {
            return (
                <Col>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </Col>
            )} else {
                return (
                    <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
                </Col>
                )
            }
        }

    function hideExtraPlayers(index) {
        if (show.Players[index].Player != false) {
            if (show.Players[0].Score !== 0) {
                return (
                <ListGroup.Item key={nanoid()}>
                    <Row>
                        <Col>
                            {show.Players[index].Player}
                        </Col>
                        <Col>
                            {show.Players[index].Score}
                        </Col>
                        <Col>
                            {show.Players[index].Faction}
                        </Col>
                        {winorGroupWin(index)}
                        {showSVGCheck(index)}
                    </Row>
                </ListGroup.Item>
                )
            } else {
                return (
                    <ListGroup.Item key={nanoid()}>
                        <Row>
                            <Col>
                                {show.Players[index].Player}
                            </Col>
                            <Col>
                                {show.Players[index].Faction}
                            </Col>
                            {winorGroupWin(index)}
                            {showSVGCheck(index)}
                        </Row>
                    </ListGroup.Item>
                )
            }
        }
    }

    function playerTitle() {
        let titles = ["Players", "Score", "Faction", "Winner", "New", "Picked"]
        let noScoreTitles = ["Players", "Faction", "Winner", "New", "Picked"]
        if (show.Players[0].Score !== 0){
            return titles.map((data, index) => {
                return (
                    <Col key={nanoid()}>
                        <Card.Title>{data}</Card.Title>
                    </Col>
                )
            })
        } else {
            return noScoreTitles.map((data, index) => {
                return (
                    <Col key={nanoid()}>
                        <Card.Title>{data}</Card.Title>
                    </Col>
                )
            })
        }
    }

    function playerSort() {
        let list = show.Players.sort((a, b) => {
            return b.Score - a.Score;
        })
        if (show.Players[0].Score !== 0){
            return list.map((a, index) => {
                return hideExtraPlayers(index)
            })
        } else {
            return show.Players.map((a, index) => {
                return hideExtraPlayers(index)
        })}
    }
    const timesPlayed = bg.filter((value) => {
        return value.Name===show.Name
    })
    function readTime() {
        const time = Moment(new Date(show.dated)).format("MMM Do YYYY")
        return time
    }

    function timesListed() {        
        const convert = (arr) => {
            const res = {};
            arr.forEach((obj) => {
                const time = Moment(new Date(obj.dated)).format("MMM Do YYYY")
                const key = `${obj.Name}${time}`;
                if (!res[key]) {
                    res[key] = { ...obj, count: 0 };
                };
                res[key].count += 1;
            });
        return Object.values(res);
        };

        const uniqBy = convert(timesPlayed)

        const sortUniqBy = uniqBy.sort((a, b) => a.dated.localeCompare(b.dated))

        return (sortUniqBy.map(tp => {
            function dateClick(event) {
                event.preventDefault(event);
                setDate(new Date(tp.dated))
            }

            const time = Moment(new Date(tp.dated)).format("MMM Do YYYY")

            function active() {
                return (
                    <ListGroup.Item key={tp._id} active>
                        <Row>
                            <Col>
                                <Card.Link className="carddate" href="#" onClick={dateClick}>
                                    {time}
                                </Card.Link>
                            </Col>
                            <Col>
                                {(tp.count === 1) ? "" : <div className="text-end">x{tp.count}</div>}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
            } 
            function unactive() {
                return (
                    <ListGroup.Item key={tp._id}>
                        <Row>
                            <Col>
                                <Card.Link className="carddate" href="#" onClick={dateClick}>
                                    {time}
                                </Card.Link>
                            </Col>
                            <Col>
                                {(tp.count === 1) ? "" : <div className="text-end">x{tp.count}</div>}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
            }
        return [(Moment(date).format("MMM Do YYYY") === time) ? active() : unactive()]
    }))}



    return (
        <Card bg="secondary" text={'Secondary'.toLowerCase() === 'light' ? 'dark' : 'white'}>
            <Card.Header>
                    <Row>
                        <Col>
                            <h1>{show.Name}</h1>
                            {show.theme !== "" ? <Card.Subtitle>Theme: {show.theme}</Card.Subtitle> : null }
                        </Col>
                        <Col className="text-end align-self-end">
                            <Card.Link className="carddate" target="_blank" href={show.url}>BGG Link</Card.Link>
                            <div>Times Played: {timesPlayed.length}</div>
                            <div>{readTime()}</div>
                        </Col>
                    </Row>
            </Card.Header>
            <Card.Body>
                    <Row>
                        {playerTitle()}
                    </Row>
                    <Row>
                        <Col>
                        <ListGroup>
                            {playerSort()}
                        </ListGroup>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={8}>
                        <Card.Title>Game Information</Card.Title>
                        <p id="gamecomments">{show.GameComments}</p>
                        </Col>
                        <Col>
                            <Stack gap={5}>
                                <Card.Title>Dates Played:</Card.Title>
                            </Stack>
                            <ListGroup>
                                {timesListed()}
                            </ListGroup>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Container 
                            triggerText={triggerText} 
                            onSubmit={changebg}
                            handleChange={updateChange}
                            show={show}
                            setEditShow={setEditShow}
                            date={date}
                            setNewBG={setEditShow}
                            newbg={editShow}
                            />
                        </Col>
                        <Col className="text-end">
                            <button className="btn btn-sm btn-danger center modal-button" onClick={removebg} id="delete">Delete</button>
                        </Col>
                    </Row>
            </Card.Body>
        </Card>
    )
}

export default Boardgamedetail;
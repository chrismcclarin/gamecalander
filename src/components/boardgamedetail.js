import Container from '../popupform/Container/updateindex.js';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Containers from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import Moment from 'moment'

function Boardgamedetail({show, updateBG, deleteBG, setShow, bg, setDate}) {
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

    function hideExtraPlayers(player) {
        if (player != false) {
            return <ListGroup.Item>{player}</ListGroup.Item>
        }
    }
    const timesPlayed = bg.filter((value) => {
        return value.Name===show.Name
    })
    function readTime() {
        const time = Moment(show.dated).format("MMM Do YYYY")
        return time
    }

    function timesListed() {
        return (timesPlayed.map(tp => {
            function dateClick(event) {
                event.preventDefault(event);
                setDate(new Date(tp.dated))
            }
            function readDate() {
                const time = Moment(tp.dated).format("MMM Do YYYY")
                return time
            }
            
            return (
                <ListGroup.Item key={tp._id}>
                    <Card.Link onClick={dateClick}>
                        {readDate()}
                    </Card.Link>
                </ListGroup.Item>
        )}))
    }



    return (
        <Card bg="secondary" text={'Secondary'.toLowerCase() === 'light' ? 'dark' : 'white'}>
            <Card.Header>
                <Containers fluid>
                    <Row>
                        <Col><h2>{show.Name}</h2></Col>
                        <Col className="text-end align-self-end">Times Played: {timesPlayed.length}</Col>
                    </Row>
                    <Row>
                        <Col><Card.Link target="_blank" href={show.url}>BGG Link</Card.Link></Col>
                        <Col className="text-end align-self-end">{readTime()}</Col>
                    </Row>
                </Containers>
            </Card.Header>
            <Card.Body>
                <Containers fluid>
                    <Row>
                        <Col>
                            <Card.Title>Players:</Card.Title>
                            <ListGroup>
                                {hideExtraPlayers(show.Player1)}
                                {hideExtraPlayers(show.Player2)}
                                {hideExtraPlayers(show.Player3)}
                                {hideExtraPlayers(show.Player4)}
                                {hideExtraPlayers(show.Player5)}
                                {hideExtraPlayers(show.Player6)}
                            </ListGroup>
                        </Col>
                        <Col>
                            <Stack gap={5}>
                                <Card.Title className="text-end">Winner: {show.Winner}</Card.Title>
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
                            />
                        </Col>
                        <Col className="text-end">
                            <button className="btn btn-sm btn-danger center modal-button" onClick={removebg} id="delete">Delete</button>
                        </Col>
                    </Row>
                </Containers>
            </Card.Body>
        </Card>
    )
}

export default Boardgamedetail;
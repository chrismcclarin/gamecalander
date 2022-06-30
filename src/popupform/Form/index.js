import React from 'react';
import Moment from 'moment'

export const Form = ({ onSubmit, closeModal, handleChange, date, setNewBG, newbg }) => {

  const Dateline = Moment(date).format("MMM Do YYYY")

  const duoSubmit = (event) => {
    event.preventDefault(event)
    onSubmit();
    closeModal();
  }

  return (
    <form onSubmit={duoSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="Name" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="url">URL</label>
        <input
          type="url"
          className="form-control"
          id="url"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="players">Players</label>
        <br />
        <label htmlFor="player1">Player 1</label>
          <input
            type="text"
            className="form-control"
            id="Player1"
            onChange={handleChange}
          />
          <label htmlFor="player2">Player 2</label>
          <input
            type="text"
            className="form-control"
            id="Player2"
            onChange={handleChange}
          />
          <label htmlFor="player3">Player 3</label>
          <input
            type="text"
            className="form-control"
            id="Player3"
            onChange={handleChange}
          />
          <label htmlFor="player4">Player 4</label>
          <input
            type="text"
            className="form-control"
            id="Player4"
            onChange={handleChange}
          />
          <label htmlFor="player5">Player 5</label>
          <input
            type="text"
            className="form-control"
            id="Player5"
            onChange={handleChange}
          />
          <label htmlFor="player6">Player 6</label>
          <input
            type="text"
            className="form-control"
            id="Player6"
            onChange={handleChange}
          />
          <label htmlFor="winner">Who Won?</label>
          <input
            type="text"
            className="form-control"
            id="Winner"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="dated">Date : {Dateline}</label>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;

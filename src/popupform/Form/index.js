import React from 'react';
import { useState, useEffect } from 'react';
import * as dayjs from 'dayjs'

export const Form = ({ onSubmit, closeModal, handleChange, date, newbg, setNewBG}) => {
  const Dateline = dayjs(date).format("MMM D YYYY")
  // const [BGGSearch, setBGGSearch] = useState(null);
  console.log(newbg)
  const duoSubmit = (event) => {
    event.preventDefault(event)
    closeModal();
    onSubmit()
  }
  
  // const bggsearch = `https://api.geekdo.com/xmlapi/search?search=Wingspan`

  // const getBGGSearch = async () => {
  //   const response = await fetch(bggsearch);
  //   const data = await response.json();
  //   setBGGSearch(data);
  // };


  return (
    <form onSubmit={duoSubmit}>

      <div className="col-sm-11">
        <label htmlFor="name">Game Name</label>
        <input className="form-control" id="Name" onChange={handleChange} />
      </div>
      <div className="col-sm-11">
        <label htmlFor="name">Theme</label>
        <input className="form-control" id="theme" onChange={handleChange} />
      </div>
      <div className="col-sm-11">
        <label htmlFor="url">URL</label>
        <input
          type="url"
          className="form-control"
          id="url"
          onChange={handleChange}
        />
      </div>
      <div className="col-sm-3">
        <label id="spacing" htmlFor="Groupwin">Group Win</label>
        <input
        type="checkbox"
        id="newbg.Groupwin"
        checked={newbg.Groupwin}
        onChange={(e) => {
          newbg.Groupwin = e.target.checked
          setNewBG({...newbg})
        }}
        />
      </div>
      <br />
      <div className="form-group">
        <h4 htmlFor="players">Players</h4>
        {newbg.Players.map((data, index) => {
          let i = index + 1
          return (
            <div key={index} id="mapSpacing">
          <div className="row">
            <div className="col-sm-3" id="spacing">
            <label htmlFor="player">Player {i}</label>
            <input
              type="text"
              id="dataPlayer"
              className="form-control"
              defaultValue={newbg.Players[index].Player}
              onChange={(e) => {
                data.Player = e.target.value;
                setNewBG({...newbg});}}
            />
            </div>
            <div className="col-sm-1" id="spacing">
            <label htmlFor="Score">Score</label>
            <input
              type="number"
              className="form-control"
              id="data.Score"
              onChange={(e) => {
                data.Score = e.target.value;
                setNewBG({...newbg});}}
            />
            </div>
            <div className="col-sm-5">
            <label htmlFor="Faction">Faction/Color/Character</label>
            <input
              type="text"
              className="form-control"
              id="data.Faction"
              onChange={(e) => {
                data.Faction = e.target.value;
                setNewBG({...newbg});}}
            />
            </div>
            <div className="row">
              <div className="col-sm-3">
            <label id="spacing" htmlFor="newPlayer">New Player</label>
            <input
              type="checkbox"
              id="data.New"
              checked={data.New}
              onChange={(e) => {
                data.New = e.target.checked
                setNewBG({...newbg})
              }}
            />
            </div>
            <div className="col-sm-3">
            <label id="spacing" htmlFor="Winner">Winner</label>
            <input
              type="checkbox"
              id="data.Winner"
              checked={data.Winner}
              onChange={(e) => {
                data.Winner = e.target.checked
                setNewBG({...newbg})
              }}
            />
            </div>
            <div className="col-sm-4">
            <label id="spacing" htmlFor="Picked">Picked the game</label>
            <input
              type="checkbox"
              id="data.Picked"
              checked={data.Picked}
              onChange={(e) => {
                data.Picked = e.target.checked
                setNewBG({...newbg})
              }}
            />
            </div>
            </div>
          </div>
          </div>)
        })}
        <div className="col-sm-11">
        <label htmlFor="name">Game Information</label>
        <textarea className="form-control" id="GameComments" onChange={handleChange}></textarea>
      </div>
          <br />
          <label htmlFor="dated">Date : {Dateline}</label>
          <input
              type="number"
              className="form-control"
              id="dated"
              onChange={(e) => {
                setNewBG({...newbg, dated: dayjs(date).add(e.target.value, "h").toString()})
                }}
            />
            // Issue here is that the second input removes the point of hte first input. 
            <input
              type="number"
              className="form-control"
              id="dated"
              onChange={(e) => {
                setNewBG({...newbg, dated: dayjs(date).add(e.target.value, "m").toString()})
                }}
            />
      </div>
      <div className="form-group">
        <button className="col-sm-11 btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;

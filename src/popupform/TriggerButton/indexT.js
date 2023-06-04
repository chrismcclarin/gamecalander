import React from 'react';
import * as dayjs from 'dayjs'

const Trigger = ({ triggerText, buttonRef, showModal, date, setNewBG, newbg }) => {

  const Dateline = dayjs(date).format("MMM D YYYY")
  const newDate = (newbg) => {
    setNewBG({...newbg, startDate: Dateline})
  }

  function click() {
    if (date === null) {
      alert('Please select a date on the calender first.')
    } else {
      newDate(newbg);
      showModal();
    }

  }

  return (
    <button
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={click}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;

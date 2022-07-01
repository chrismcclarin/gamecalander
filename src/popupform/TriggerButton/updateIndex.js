//This is a copy of Trigger's index.js, except for different click function

import React from 'react';

const Trigger = ({ triggerText, buttonRef, showModal}) => {

  function click() {
      showModal();
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

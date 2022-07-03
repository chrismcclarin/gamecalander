//This is a copy of Trigger's index.js, except for different click function

import React from 'react';

const Trigger = ({ triggerText, buttonRef, showModal, show}) => {

  function click() {
      showModal();
    }

  return (
    <button
      className="btn btn-sm btn-warning center modal-button"
      ref={buttonRef}
      onClick={click}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;

import React, { Component } from 'react';
import Modal from '../Modal/index.js';
import TriggerButton from '../TriggerButton/indexT';
export class Container extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          triggerText={this.props.triggerText}
          date={this.props.date}
          setNewBG={this.props.setNewBG}
          newbg={this.props.newbg}
        />
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            handleChange={this.props.handleChange}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            date={this.props.date}
            setNewBG={this.props.setNewBG}
            newbg={this.props.newbg}
            handlePlayerChange={this.props.handlePlayerChange}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;

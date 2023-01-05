import { Overlay, ModalWindow } from './Modal.styled';
import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyClose);
  }

  handelKeyClose = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handelClose = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Overlay onClick={this.handelClose}>
        <ModalWindow>{children}</ModalWindow>
      </Overlay>
    );
  }
}

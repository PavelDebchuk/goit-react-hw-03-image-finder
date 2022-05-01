import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './components.styles.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  handlEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlEscape);
  }

  render() {
    return createPortal(
      <div className="Modal">
        <div className="Overlay" onClick={this.props.onClose}>
          <p>{this.props.children}</p>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

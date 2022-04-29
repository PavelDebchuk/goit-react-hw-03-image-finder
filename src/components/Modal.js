import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './components.styles.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', e => {
      console.log('Нажали ЕСК нужно закрить модалку');
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmaunt');
  }
  render() {
    return createPortal(
      <div className="Modal">
        <div className="Overlay">
          <button type="button" onClick={this.props.onClose}>
            OOOOOOOOOOOO
          </button>
          <p>{this.props.children}</p>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

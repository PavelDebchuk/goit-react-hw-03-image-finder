import React, { Component } from 'react';
import './components.styles.css';

export default class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <p>{this.props.children}</p>
          <img src="" alt="" />
        </div>
        <button type="button" onClick={this.props.onClose}></button>
      </div>
    );
  }
}

import React, { Component } from 'react';
class Overlay extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        onClick={this.props.closeModal}
        className={
          this.props.overlayIsHidden
            ? 'hidden'
            : 'fixed top-0 bottom-0 left-0 right-0 bg-blue-300 bg-opacity-40 backdrop-blur-sm rounded drop-shadow-lg'
        }
      ></div>
    );
  }
}
export default Overlay;

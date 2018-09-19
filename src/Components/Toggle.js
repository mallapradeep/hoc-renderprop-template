import React, { Component } from 'react'

class Toggle extends Component {
  state = {
    visible: true
  }
  handleUpdateVisibility = () => {
    this.setState((prevState) => {
      return { visible: !prevState.visible }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleUpdateVisibility}>{this.state.visible ? 'Hide' : 'Show'} {this.props.target}</button>
        {this.state.visible && this.props.render()}
      </div>
    )
  }
}

export default Toggle
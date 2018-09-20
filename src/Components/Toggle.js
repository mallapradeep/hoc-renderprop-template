import React, { Component, Fragment } from 'react';

class Toggle extends Component {

    state = {
        visible: true
    };

    handleVisibilityUpdate = () => {
        this.setState(prevState => {
            return { visible: !prevState.visible };
        });
    };

    //Fragment is used inplace of divs becoz
    //1> It’s a tiny bit faster and has less memory usage (no need to create an extra DOM node).
    // This only has a real benefit on very large and/or deep trees, but application performance
    // often suffers from death by a thousand cuts. This is one cut less. n The DOM inspector is less cluttered.

    render() {
        return (
            <Fragment>
                <button onClick={this.handleVisibilityUpdate}>
                {this.state.visible ? 'Hide' : 'Show'}
                </button>
                {this.state.visible && this.props.render()}
            </Fragment>
        )
    }


}

export default Toggle;
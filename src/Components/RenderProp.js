import React, { Component } from 'react'

class ExchangedCurrencyRP extends Component {
  state = {
    amount: 1
  }
  handleAmountIncrease = () => {
    this.setState((prevState) => {
      return { amount: prevState.amount + 1 }
    })
  }
  handleAmountDecrease = () => {
    if (this.state.amount > 0) {
      this.setState((prevState) => {
        return { amount: prevState.amount - 1 }
      })
    }
  }
  render() {
    return (
      <div className="currency-exchange">
        <button className='btn increase' onClick={this.handleAmountIncrease}>+</button>
        <button className='btn decrease' onClick={this.handleAmountDecrease}>-</button>
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default ExchangedCurrencyRP
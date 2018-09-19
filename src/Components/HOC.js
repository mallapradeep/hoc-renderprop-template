import React, { Component } from 'react'

const withCurrency = (BaseComponent) => (
  class HOC extends Component {
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
        <div className='currency-exchange'>
          <button className='btn increase' onClick={this.handleAmountIncrease}>+</button>
          <button className='btn decrease' onClick={this.handleAmountDecrease}>-</button>
          <BaseComponent
            amount={this.state.amount}
            exchangeRate={this.props.exchangeRate}
            currency={this.props.currency} />
        </div>
      )
    }
  }
)

const CurrencyDisplay = (props) => <p>US Dollar: ${props.amount.toFixed(2)} - {props.currency}{(props.amount * props.exchangeRate).toFixed(2)}</p>

const ExchangedCurrencyHOC = withCurrency(CurrencyDisplay)

export default ExchangedCurrencyHOC
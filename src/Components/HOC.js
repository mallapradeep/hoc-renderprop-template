import React, { Component } from 'react';


const withCurrency = (BaseComponent) => 
    class Currency extends Component {
        state = {
            amount: 1
        };

        handleAmountIncrease = () => {
            this.setState(prevState => {
                return { amount: prevState.amount + 1 };
            });
        };

        handleAmountDecrease = () => {
            this.setState(prevState => {
                return { amount: prevState.amount - 1 };
            });
        };

        render() {
            return (
                <div className='currency-exchange'>
                    <button className="btn increase" onClick={this.handleAmountIncrease}>+</button>
                    <button className="btn decrease" onClick={this.handleAmountDecrease}>-</button>
                    <BaseComponent
                      amount={this.state.amount}
                      currency={this.props.currency}
                      exchangeRate={this.props.exchangeRate}/>
                    
                </div>
            );
        }
    };


    const CurrencyDisplay = props => (
        <p>
          US Dollar: ${props.amount.toFixed(2)} - {props.currency}{' '}
          {props.amount * props.exchangeRate}
        </p>
      );
      
      const HOC= withCurrency(CurrencyDisplay);
      
      export default HOC;
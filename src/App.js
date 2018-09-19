import React, { Component, Fragment } from 'react';
import './App.css';

import ExchangedCurrencyHOC from './Components/HOC'
import ExchangedCurrencyRP from './Components/RenderProp'
import Currency from './Components/Currency'
import Toggle from './Components/Toggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle render={() => (
          <Fragment>
            <h1> Higher Order Component</h1>
            <ExchangedCurrencyHOC
              exchangeRate={.76}
              currency={`Pound: £`} />
            <ExchangedCurrencyHOC
              exchangeRate={112.35}
              currency={`Yen: ¥`} />
          </Fragment>
        )}
          target={`HOC`}
        />
        <Toggle render={() => (
          <Fragment>
            <h1>Render Prop</h1>
            <ExchangedCurrencyRP
              render={(args) => <p>US Dollar: ${args.amount.toFixed(2)} - Krone: kr{(args.amount * 8.15).toFixed(2)}</p>} />
            <ExchangedCurrencyRP
              render={(args) => <Currency args={args} currency={`Euro: €`} rate={0.86} />} />
          </Fragment>
        )}
        target={`Render Prop`}
        />
      </div>
    );
  }
}

export default App;

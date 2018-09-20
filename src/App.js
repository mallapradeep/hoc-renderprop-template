import React, { Component } from 'react';
import './App.css';
import HOC from './Components/HOC';
import RenderProp from './Components/RenderProp';
import Toggle from './Components/Toggle';



class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>Higher Order Components</h1>
                  <Toggle 
                      render={() =>  <HOC currency={'Iraqi Dinar: '} 
                                          exchangeRate={1190}/>} />


           <h1>Render Prop</h1>
              <Toggle render={() => (<RenderProp render={args => (
              <p>
                UD Dollar: {args.amount.toFixed(2)} - Nepali Rupee{' '}
                  {args.amount * (106.2).toFixed(2)}{' '}
              </p>
              )} />
              )} />

               <Toggle render={() => (<RenderProp render={args => (
              <p>
                UD Dollar: {args.amount.toFixed(2)} - Thai Bhatt{' '}
                  {args.amount * (32.38).toFixed(2)}{' '}
              </p>
              )} />
              )} />        
     
      </div>
    );
  }
}

export default App;

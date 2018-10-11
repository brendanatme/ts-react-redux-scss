import * as React from 'react';
import './app.scss';

import logo from '~/assets/logo.svg';

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/app.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
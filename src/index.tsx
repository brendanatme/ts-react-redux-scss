import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from '~/components';
import { configure } from '~/store';
import registerServiceWorker from '~/helpers/register-service-worker';
import './index.scss';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

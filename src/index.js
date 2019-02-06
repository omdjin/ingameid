import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactGA.initialize(process.env.REACT_APP_GA_KEY, { titleCase: false });
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(<App history={history} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

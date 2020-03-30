import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { StateProvider } from "./context/Store"

ReactDOM.render(
	<React.StrictMode>
		{/* <StateProvider> */}
			<App />
		{/* </StateProvider> */}
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();

/* 

In order of setup usefulness for PWA.

https://blog.bitsrc.io/how-to-build-a-react-progressive-web-application-pwa-b5b897df2f0a
https://scotch.io/tutorials/the-ultimate-guide-to-progressive-web-applications
https://create-react-app.dev/docs/making-a-progressive-web-app/

 */
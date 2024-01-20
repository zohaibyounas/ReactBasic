import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'

//import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';

// import Body from './fcomponents/Body'
// import Counters from './fcomponents/Counters';
// import ExampalComponent from './fcomponents/ExampleComponent'
// import BootstrapUi from './fcomponents/BootstrapUi'
// import MetrialUi from './fcomponents/MetrialUi';
// import Table from './fcomponents/Table';
// import ExampleComponent from './fcomponents/ExampleComponent';
//import UseEffect1 from './fcomponents/UseEffect1'
import UseEffectApi from './fcomponents/UseEffectApi';
//import UseEffectApi from './fcomponents/UseEffectApi';
//import Uncontroll from './fcomponents/Uncontroll';
//import Paganition from './fcomponents/Paganition';
//import MemoizedEventHandler from './fcomponents/Memo';
import MemoizedEventHandler from './fcomponents/MemoizedEventHandler';
//import PasswordWithHooks from './fcomponents/PasswordWithHooks'
import PasswordWithHooks from './fcomponents/PasswordWithHooks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PasswordWithHooks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 
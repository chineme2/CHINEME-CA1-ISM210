import React from 'react';
import './App.css';

import Email from './components/email';
import Sms from './components/sms';
import Url from './components/url';

const App: React.FC = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <Email/>
      </div>
      <div className="Column2">
        <Sms/>
      </div>
      <div className="Column3">
        <Url/>
      </div>
    </div>
  );
}

export default App;
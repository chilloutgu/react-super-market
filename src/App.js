import React from 'react';
import SuperMarket from './components/SuperMarket';
import DevTools from 'mobx-react-devtools';

function App() {
  return (
    <div>
      <SuperMarket />
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  );
}

export default App;

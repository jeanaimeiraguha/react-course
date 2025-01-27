import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <Greeting name="Jean Aime" age={25} />
      <Greeting name="Sarah" age={30} />
    </div>
  );
};

export default App;

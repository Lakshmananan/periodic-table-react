import React, { useEffect } from 'react';
import Table from './components/Table';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div class='brown lighten-5'>
      ><h1 className='center'>Period Table</h1>
      <Table />
    </div>
  );
}

export default App;

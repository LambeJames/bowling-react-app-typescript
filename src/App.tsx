import * as React from 'react';
import './App.css';
import AddScore from './components/addScore';
import DisplayScore from './components/displayScore';


const App = () => <>

  <AddScore />
  <DisplayScore rolls={[""]} />

</>

export default App;
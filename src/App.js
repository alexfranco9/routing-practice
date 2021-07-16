import './App.css';

import { Router } from '@reach/router';
import Second from './components/Second';
import Fourth from './components/Fourth';

function App() {
  return (
    <div className="App">
      <Router>
        <Second path="/:input"/>
        <Fourth path="/:str/:color/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;

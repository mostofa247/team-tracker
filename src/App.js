import React from 'react';
import Header from './components/Header';
import Team from './components/Team';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Teams from './components/Teams';

function App() {
  
  return (
    <div className="App">
      <Router>
      
      <Route exact path="/">
      <Header></Header>
      <Team></Team>
      </Route>
      <Route path="/teams/:idTeam" children={<Teams></Teams>}></Route>
    </Router>
    </div>
  );
}

export default App;

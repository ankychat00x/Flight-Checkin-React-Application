import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import FindReservation from './components/FindReservation';
import ReviewReservation from './components/ReviewReservation';
import ConfirmCheckin from './components/ConfirmCheckin';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={FindReservation}/>
            <Route exact path="/reviewReservation/:reservationId" component={ReviewReservation}/>
            <Route exact path="/confirmCheckin/" component={ConfirmCheckin}/>
        </Switch>
    </div>
  );
}

export default App;

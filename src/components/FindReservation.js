import React from 'react';
import axios from 'axios';

class FindReservation extends React.Component{

    state={};

handleFind(){

    this.props.history.push('/reviewReservation/'+this.id);
    console.log(this.id);
    
}

    render(){

        return(
            <div>
                <h2>Flight Checkin</h2><br/>
                Enter the Reservation ID: <input type="text" onChange={(e)=>this.id=e.target.value}/>
                <button onClick={this.handleFind.bind(this)}>Find</button>
                </div>
        )
    }
}

export default FindReservation;
import React from 'react';
import axios from 'axios';

class ReviewReservation extends React.Component{

//state={};

constructor(props){
super(props);
this.state = {flight:{}}
}

componentDidMount(){

    axios.get("http://localhost:8080/flightservices/reservations/"+this.props.match.params.reservationId).then
    (res=>{
        console.log(res.data)

        this.setState({airlines:res.data.flight.operatingAirlines,flightId:res.data.flight.flightNumber,
            departureCity:res.data.flight.departureCity,arrivalCity:res.data.flight.arrivalCity,
            time:res.data.flight.estimatedDepartureTime,date:res.data.flight.dateOfDeparture,
        firstName : res.data.passenger.firstName,lastName : res.data.passenger.lastName,
        middleName : res.data.passenger.middleName,email : res.data.passenger.email,
        phone : res.data.passenger.phone})
        console.log(this.state)
    })
}



handleOnChange(e){

    e.preventDefault();
    const data = {
        id : this.props.match.params.reservationId,
        numberOfBags : this.bags,
        checkIn : true

    }

    console.log("hi")
    console.log(data)
    axios.put("http://localhost:8080/flightservices/reservations/",data).
    then(res=>{

        this.props.history.push('/confirmCheckin/')
    })

}

    render(){

          
        return(
            <div>
                <h2>Review Reservation</h2><br/>
                <h2>Flight Details</h2>

                    Airlines: {this.state.airlines}<br/>
                    Flight No.: {this.state.flightId}<br/>
                    Departure City: {this.state.departureCity}<br/>
                    Arrival City: {this.state.arrivalCity}<br/>
                    Date of Departure: {this.state.date}<br/>
                    Estimated Time of Departure: {this.state.time}<br/>

                    <h2>Passenger Details</h2>
                    First Name: {this.state.firstName}<br/>
                    Last Name: {this.state.lastName}<br/>
                    Middle Name: {this.state.middleName}<br/>
                    Email: {this.state.email}<br/>
                    Phone: {this.state.phone}<br/>

                    Enter the number of bags to check in : <input type="text" name="numberOfBags" onChange={(e)=>this.bags=e.target.value}/>
                    <button  onClick={this.handleOnChange.bind(this)}>submit</button>

                </div>
        )
    }
}

export default ReviewReservation;
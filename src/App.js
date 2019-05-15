import React from "react";
import "./sass/_main.scss";

import Input from './js/components/FilledInput';
import SubmitButton from './js/components/Button';

import moment from 'moment';


// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// FA Icons
import faPlaneDeparture from "@fortawesome/fontawesome-free/svgs/solid/plane-departure.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      destination: "",
      oneway: false,
      startDate: new Date(),
      endDate: new Date().setDate(new Date().getDate() + 3)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "oneway") {
      this.setState({ [event.target.name]: !this.state.oneway });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }

    console.log(event.target.name);
  }

  handleDate(date, event) {
    console.log(event);
    this.setState({
      [event]: date
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.oneway);
    event.preventDefault();
  }


  render() {
    return (
      <div className="container">
        <div className='bg'></div>
        <form onSubmit={this.handleSubmit} className="flightForm">
          <div className="flightInput">
            <Input
              change={this.handleChange}
              class="inputField inputField--left" 
              dest={this.state.start}
              name="start"
              plch="From: City, Station or Airport"
            />
            <Input
              change={this.handleChange}
              class="inputField inputField--right" 
              dest={this.state.destination}
              name="destination"
              plch="To: City, Station or Airport"
            />
          </div>
          <div className="dates">
            <DatePicker
              className="dates__start"
              selected={this.state.startDate}
              value={moment(this.state.startDate, "MM-DD-YYYY").format("Do MMMM")}
              onChange={e => this.handleDate(e, "startDate")}
            />
            <DatePicker
              className="dates__end"
              selected={this.state.endDate}
              value={moment(this.state.endDate).format("Do MMMM")}
              onChange={e => this.handleDate(e, "endDate")}
            />
          </div>
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default App;

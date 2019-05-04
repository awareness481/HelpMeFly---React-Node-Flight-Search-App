import React from "react";
import "./sass/_main.scss";

import Input from './js/components/FilledInput';
import SwitchToggle from "./js/components/Switch";
import SubmitButton from './js/components/Button';




// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        <form onSubmit={this.handleSubmit} className="flightForm">
          <SwitchToggle
            change={this.handleChange}
            value={this.state.oneway}
          />
          <div className="dates">
            <DatePicker
              className="dates__start"
              selected={this.state.startDate}
              onChange={e => this.handleDate(e, "startDate")}
            />
            <DatePicker
              className="dates__end"
              selected={this.state.endDate}
              onChange={e => this.handleDate(e, "endDate")}
            />
          </div>
          <div className="flightInput">
            <Input
              change={this.handleChange}
              class="inputField inputField--left" 
              dest={this.state.start}
              name="start"
            />
            <Input
              change={this.handleChange}
              class="inputField inputField--right" 
              dest={this.state.destination}
              name="destination"
            />
          </div>
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './_main.scss';

import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import Switch from '@material-ui/core/Switch';

// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      destination: '',
      oneway: false,
      startDate: new Date(),
      endDate: new Date().setDate(new Date().getDate() + 3)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'oneway') {
      this.setState( {[event.target.name] : !this.state.oneway})
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
    
    console.log(event.target.name);
  }

  handleDate(date, event) {
    console.log(event)
    this.setState({
      [event]: date
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.oneway);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='flightForm'>
        <Switch
          onChange={this.handleChange}
          name='oneway'
          value={this.state.oneway}
        >
        </Switch>
        <div className='dates'>
          <DatePicker
            selected={this.state.startDate}
            onChange={e => this.handleDate(e,'startDate')}
          />
          <DatePicker
            selected={this.state.endDate}
            onChange={e => this.handleDate(e,'endDate')}
          />
        </div>
        <div className='flightInput'>
          <FilledInput
            disableUnderline={true}
            name='start'
            onChange={this.handleChange}
            required={true}
            type='text'
            value={this.state.start}
          >
          </FilledInput>
          <FilledInput
            disableUnderline={true}
            name='destination'
            onChange={this.handleChange}
            required={true}
            type='text'
            value={this.state.destination}
          >
          </FilledInput>
        </div>
        <Button type='submit' value='Submit' className='submitButton'>Submit</Button>
      </form>
    );
  }
}

export default App;

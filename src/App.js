import React from 'react';
import './_main.scss';

import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import Switch from '@material-ui/core/Switch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      destination: '',
      oneway: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'oneway') {
      this.setState( {[event.target.name] : !this.state.oneway})
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
    
    console.log(event.target.name);
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

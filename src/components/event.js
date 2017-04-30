import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Config from '../config';


class Event extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      name: '',
      location: Config.location[0],
      etype: Config.eve_type[0],
      success: false
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(propertyName, event) {
    event.preventDefault(); 
      this.setState({
        [propertyName]: event.target.value
      });
  }

  handleDateChange(date) {
    this.setState({
        date: date
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(Config.API_URL + 'event', {
      name: this.state.name,
      edate: this.state.date,
      location: this.state.location,
      etype: this.state.etype,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({
      success: true
    });
    setTimeout(() => { this.setState({
      success: false,
      date: moment(),
      name: '',
      location: 'Bengaluru',
      etype: ''
    }); }, 3000);
  }


  render() {

    let locations = null;
    locations = Config.location.map(function itr(location) {
            return (<option key={location} value={location}>{location}</option>);
          });
    let e_types = null;
    e_types = Config.eve_type.map(function itr(e_type) {
            return (<option key={e_type} value={e_type}>{e_type}</option>);
          });

    return (
      <div className="main-content">
        <form className="form-basic" onSubmit={this.handleSubmit}>

            {this.state.success ? <div className="form-title-row"><h2>Event Successfully Created</h2></div> : null}

            <div className="form-title-row">
                <h1>Create Event</h1>
            </div>

            <div className="form-row">
                <label>
                    <span>Name of Event</span>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange.bind(this, 'name')}/>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Date</span>
                    <DatePicker placeholderText="Select a date" minDate={moment()} selected={this.state.date} onChange={this.handleDateChange}/>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Event Type</span>
                    <select value={this.state.etype} name="etype" onChange={this.handleInputChange.bind(this, 'etype')}>
                        {e_types}
                    </select>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Location</span>
                    <select value={this.state.location} name="location" onChange={this.handleInputChange.bind(this, 'location')}>
                        {locations}
                    </select>
                </label>
            </div>
            <div className="outer">
                <div>
                  <button className="inner" type="submit" value="Submit">Create Event</button>
                </div>
            </div>

        </form>

    </div>

    );
  }
}

export default Event;

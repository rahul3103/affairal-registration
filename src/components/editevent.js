import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Config from '../config';


class EditEvent extends Component {

  render() {

    let locations = null;
    locations = Config.location.map(function itr(location) {
            return (<option key={location} value={location}>{location}</option>);
          });
    let e_types = null;
    e_types = Config.eve_type.map(function itr(e_type) {
            return (<option key={e_type} value={e_type}>{e_type}</option>);
          });
    let date = moment(this.props.event.edate)
    return (
      <div >

            <div className="form-title-row">
                <h1>Edit Event</h1>
            </div>

            <div className="form-row">
                <label>
                    <span>Name of Event</span>
                    <input type="text" defaultValue={this.props.event.name} name="name" onChange={(e)=>this.props.handleInputChange('name', e)}/>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Date</span>
                    <DatePicker placeholderText="Select a date" selected={date} onChange={this.props.handleDateChange}/>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Event Type</span>
                    <select defaultValue={this.props.event.etype} name="etype" onChange={(e)=>this.props.handleInputChange('etype', e)}>
                        {e_types}
                    </select>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Location</span>
                    <select defaultValue={this.props.event.location} name="location" onChange={(e)=>this.props.handleInputChange('location', e)}>
                        {locations}
                    </select>
                </label>
            </div>
            

    </div>

    );
  }
}

export default EditEvent;

import React, { Component } from 'react';
import DateConverter from './utils';


class EPreview extends Component {


  render() {
    let info = this.props.event
    let localDate = DateConverter(new Date(info.edate));
    
    return (
            <div>
            <div className="form-title-row">
                <h1>Event Details</h1>
            </div>

            <div className="form-row">
                <label>
                    <span>Event name</span>
                    <span>{info.name}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Event Date</span>
                    <span>{localDate}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Event Type</span>
                    <span>{info.etype}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Location</span>
                    <span>{info.location}</span>
                </label>
            </div>
            </div>

    );
  }
}

export default EPreview;
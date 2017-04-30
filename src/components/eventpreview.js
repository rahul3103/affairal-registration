import React, { Component } from 'react';
import axios from 'axios';
import Config from '../config'
import DateConverter from './utils';


class EventPreview extends Component {

  constructor(props) {
    super(props);

    this.state = {
      event: {}
    };
  }

  componentWillMount() {
    const self = this;
    axios.get(Config.API_URL + 'events/' + this.props.match.params.id)
    .then(function (response) {
      self.setState({event : response.data.event});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let info = this.state.event
    let localDate = DateConverter(new Date(info.edate));
    
    return (
      <div className="main-content">
      <div className="form-basic">
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

            <div className="outer">
                <div>
                  <a href={"edit/"+ info.id} className="inner">Edit</a>
                </div>
            </div>

            </div>
    </div>

    );
  }
}

export default EventPreview;
import React, { Component } from 'react';
import axios from 'axios';
import Config from '../config'
import EPreview from './epreview'
import EditEvent from './editevent'


class EventPreview extends Component {

  constructor(props) {
    super(props);

    this.state = {
      event: {},
      preview: true,
      edit: false,
      backbutton: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.hidePreview = this.hidePreview.bind(this);
    this.showPreview = this.showPreview.bind(this);
  }

  componentWillMount() {
    const self = this;
    axios.get(Config.API_URL + 'events/' + this.props.match.params.id)
    .then(function (response) {
      self.setState({event : response.data.event
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleDateChange(date) {
    const events = this.state.event;
    events.edate = date;
    
    this.setState({
        event: events
      });
  }

  handleInputChange(propertyName, e) {
    event.preventDefault();
    const events = this.state.event;
    events[propertyName] = e.target.value
      this.setState({
        event: events
      });
  }

  handleSubmit() {
    event.preventDefault();
    axios.post(Config.API_URL + 'event/' + this.state.event.id, {
      name: this.state.event.name,
      edate: this.state.event.edate,
      location: this.state.event.location,
      etype: this.state.event.etype,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  hidePreview() {
    this.setState({
      preview: false,
      edit: true,
      backbutton: false
    });
  }

  showPreview() {
    this.setState({
      preview: true,
      edit: false,
      backbutton: true
    });
  }

  render() {
    
    return (
      <div className="main-content">
        <form className="form-basic" onSubmit={this.handleSubmit}>
            {this.state.preview ? <EPreview event={this.state.event} />: null}
            {!this.state.preview ? <EditEvent event={this.state.event}
                                              handleDateChange={this.handleDateChange}
                                              handleInputChange={this.handleInputChange} 
            />: null}
            <div className="outer">
                <div>
                  {this.state.backbutton ? <button onClick={this.hidePreview} className="inner" >Edit</button>: null}
                  {!this.state.backbutton ? <button onClick={this.handleSubmit} className="inner" >Submit</button>: null}
                </div>
            </div>
      </form>
    </div>

    );
  }
}

export default EventPreview;
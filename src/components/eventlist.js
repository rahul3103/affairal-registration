import React, { Component } from 'react';
import axios from 'axios';
import Config from '../config'
import DateConverter from './utils';


class EventList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentWillMount() {
    const self = this;
    axios.get(Config.API_URL + 'events')
    .then(function (response) {
      self.setState({events : response.data.events});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  
  render() {
    let ui = null;
    
    ui = (
      <table className="user-table">
          <thead>
            <tr>
              <th className="col2"><button className="btn" onClick={()=>this.sortBy('name')}>#</button>Event Name</th>
              <th className="col3"><button className="btn" onClick={()=>this.sortBy('location')}>#</button>Location</th>
              <th className="col5"><button className="btn" onClick={()=>this.sortBy('edate')}>#</button>Event Date</th>
              <th className="col6"><button className="btn" onClick={()=>this.sortBy('etype')}>#</button>Event Type</th>
            </tr>
          </thead>
          <tbody>
          {this.state.events.map(function itr(event) {
            return (<tr key={event.id}>
                      <td className="col1">
                        <a href={"eventlist/" + event.id}>{event.name}</a>
                      </td>
                      <td className="col2">
                        {event.location}
                      </td>
                      <td className="col3">
                        {DateConverter(new Date(event.edate))}
                      </td>
                      <td className="col4">
                        {event.etype}
                      </td>
                    </tr>);
          })}
          </tbody>
        </table>
    );

    return (
      <div>
        <div className="shift">
          <h1>Events List</h1>
            {ui}
        </div>
      </div>
    );
  }
}

export default EventList;

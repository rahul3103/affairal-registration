import React, { Component } from 'react';
import axios from 'axios';
import UserList from './userlist'
import Config from '../config'


class AdminPage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentWillMount() {
    const self = this;
    axios.get(Config.API_URL + 'users')
    .then(function (response) {
      self.setState({users : response.data.users});
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
              <th className="col1"><button className="btn" onClick={()=>this.sortBy('id')}>#</button>Registartion No.</th>
              <th className="col2"><button className="btn" onClick={()=>this.sortBy('name')}>#</button>Full Name</th>
              <th className="col3"><button className="btn" onClick={()=>this.sortBy('mobile')}>#</button>Mobile</th>
              <th className="col4"><button className="btn" onClick={()=>this.sortBy('email')}>#</button>Email</th>
              <th className="col5"><button className="btn" onClick={()=>this.sortBy('rdate')}>#</button>Reg. Date</th>
              <th className="col6"><button className="btn" onClick={()=>this.sortBy('rtype')}>#</button>Type</th>
              <th className="col7"><button className="btn" onClick={()=>this.sortBy('tickets')}>#</button>No. of Tickets</th>
            </tr>
          </thead>
          <tbody>
          {this.state.users.map(function itr(user) {
            return (<UserList key={user.id} user={user}/>);
          })}
          </tbody>
        </table>
    );

    return (
      <div>
        <div className="shift">
          <h1>Registration Info</h1>
            {ui}
        </div>
      </div>
    );
  }
}

export default AdminPage;
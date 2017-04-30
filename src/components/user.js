import React, { Component } from 'react';
import axios from 'axios';
import Config from '../config'
import DateConverter from './utils';


class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    const self = this;
    axios.get(Config.API_URL + 'users/' + this.props.match.params.id)
    .then(function (response) {
      self.setState({user : response.data.user});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let info = this.state.user
    let localDate = DateConverter(new Date(info.rdate));
    return (
      <div className="main-content">
      <div className="form-basic">
            <div className="form-title-row">
                <h1>Details</h1>
            </div>

            <div className="form-row">
                <label>
                    <span>Registration ID</span>
                    <span>{info.id}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Full name</span>
                    <span>{info.name}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Registration Date</span>
                    <span>{localDate}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Mobile</span>
                    <span>{info.mobile}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>E-mail</span>
                    <span>{info.email}</span>
                </label>
            </div>

            <div className="form-row">
                <label className="upload">
                    <span>Upload ID Card</span>
                    <span className="imgcon"><img src={info.idcard} alt="ID"/></span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Registration Type</span>
                    <span>{info.rtype}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Number of Tickets</span>
                    <span>{info.tickets}</span>
                </label>
            </div>
            </div>
    </div>

    );
  }
}

export default User;